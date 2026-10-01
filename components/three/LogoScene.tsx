"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Billboard, ContactShadows, Environment, Lightformer, useTexture } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import { LOGO_PATH, LOGO_VIEWBOX } from "./logoPath";
import { useVisibleFrameloop } from "./useVisibleFrameloop";

/**
 * The SuperOrdinary mark, extruded in glossy black, with the brands it runs
 * orbiting it as logo tiles. The mark is traced from the official logo.
 */

function useLogoGeometry() {
  return useMemo(() => {
    const [x, y, w, h] = LOGO_VIEWBOX;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${x} ${y} ${w} ${h}"><path fill="#000" fill-rule="evenodd" d="${LOGO_PATH}"/></svg>`;
    const data = new SVGLoader().parse(svg);
    const shapes = data.paths.flatMap((p) => SVGLoader.createShapes(p));
    const geo = new THREE.ExtrudeGeometry(shapes, {
      depth: 70,
      bevelEnabled: true,
      bevelThickness: 14,
      bevelSize: 7,
      bevelSegments: 6,
      curveSegments: 48,
    });
    geo.center();
    // SVG space has y pointing down; flip so the S reads correctly.
    const s = 2.05 / w;
    geo.scale(s, -s, s);
    geo.computeVertexNormals();
    return geo;
  }, []);
}

function Mark() {
  const geo = useLogoGeometry();
  const g = useRef<THREE.Group>(null);
  useFrame(({ clock, pointer }, dt) => {
    if (!g.current) return;
    const t = clock.getElapsedTime();
    const k = 1 - Math.exp(-dt * 2.5);
    // A slow sway rather than a spin, so the S stays readable.
    g.current.rotation.y += (Math.sin(t * 0.45) * 0.55 + pointer.x * 0.35 - g.current.rotation.y) * k;
    g.current.rotation.x += (-pointer.y * 0.25 + Math.sin(t * 0.3) * 0.06 - g.current.rotation.x) * k;
    g.current.position.y = Math.sin(t * 0.8) * 0.06;
  });
  return (
    <group ref={g}>
      <mesh geometry={geo} castShadow>
        <meshPhysicalMaterial
          color="#121212"
          metalness={0.2}
          roughness={0.22}
          clearcoat={1}
          clearcoatRoughness={0.05}
          envMapIntensity={1.6}
        />
      </mesh>
    </group>
  );
}

/** A rounded square, so logo tiles read as app-icon cards, not raw planes. */
function useRoundedSquare(size: number, radius: number) {
  return useMemo(() => {
    const h = size / 2;
    const r = radius;
    const shape = new THREE.Shape();
    shape.moveTo(-h + r, -h);
    shape.lineTo(h - r, -h);
    shape.quadraticCurveTo(h, -h, h, -h + r);
    shape.lineTo(h, h - r);
    shape.quadraticCurveTo(h, h, h - r, h);
    shape.lineTo(-h + r, h);
    shape.quadraticCurveTo(-h, h, -h, h - r);
    shape.lineTo(-h, -h + r);
    shape.quadraticCurveTo(-h, -h, -h + r, -h);
    return new THREE.ShapeGeometry(shape, 12);
  }, [size, radius]);
}

function Tile({ url, angle, radius, tilt, speed, y }: { url: string; angle: number; radius: number; tilt: number; speed: number; y: number }) {
  const tex = useTexture(url);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  const card = useRoundedSquare(0.46, 0.1);
  const edge = useRoundedSquare(0.48, 0.11);
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const a = angle + clock.getElapsedTime() * speed;
    ref.current.position.set(Math.cos(a) * radius, y + Math.sin(a) * tilt, Math.sin(a) * radius * 0.7);
    const s = 0.78 + 0.22 * (Math.sin(a) + 1) * 0.5; // nearer tiles read larger
    ref.current.scale.setScalar(s);
  });
  return (
    <group ref={ref}>
      <Billboard>
        <mesh geometry={edge} position={[0, 0, -0.004]}>
          <meshBasicMaterial color="#e5e5e5" toneMapped={false} />
        </mesh>
        <mesh geometry={card} position={[0, 0, -0.002]}>
          <meshBasicMaterial color="#ffffff" toneMapped={false} />
        </mesh>
        <mesh>
          <planeGeometry args={[0.32, 0.32]} />
          <meshBasicMaterial map={tex} transparent toneMapped={false} />
        </mesh>
      </Billboard>
    </group>
  );
}

function Orbit({ logos }: { logos: string[] }) {
  const { viewport } = useThree();
  const r = Math.min(1.95, viewport.width * 0.4);
  return (
    <>
      {logos.map((url, i) => {
        const inner = i % 2 === 0;
        return (
          <Tile
            key={url}
            url={url}
            angle={(i / logos.length) * Math.PI * 2}
            radius={inner ? r : r * 1.18}
            tilt={inner ? 0.45 : -0.35}
            speed={inner ? 0.12 : 0.09}
            y={inner ? 0.05 : -0.05}
          />
        );
      })}
    </>
  );
}

export default function LogoScene({ logos }: { logos: string[] }) {
  const { ref, frameloop } = useVisibleFrameloop<HTMLDivElement>();
  return (
    <div ref={ref} className="absolute inset-0">
      <Canvas
        frameloop={frameloop}
        dpr={[1, 2]}
        shadows
        camera={{ position: [0, 0.3, 7.4], fov: 35 }}
        gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 5, 4]} intensity={1.2} castShadow />
        <Environment resolution={256}>
          <Lightformer form="rect" intensity={4} position={[0, 3, 4]} scale={[6, 1.5, 1]} />
          <Lightformer form="rect" intensity={2.5} position={[-4, 0, 2]} scale={[1, 5, 1]} />
          <Lightformer form="rect" intensity={6} color="#f23726" position={[4, -0.5, -1]} scale={[1, 4, 1]} />
          <Lightformer form="circle" intensity={1.5} position={[0, -3, 3]} scale={3} />
        </Environment>
        <Suspense fallback={null}>
          <Mark />
          <Orbit logos={logos} />
        </Suspense>
        <ContactShadows position={[0, -1.6, 0]} opacity={0.28} scale={9} blur={2.6} far={4} />
      </Canvas>
    </div>
  );
}
