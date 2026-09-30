"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useVisibleFrameloop } from "./useVisibleFrameloop";

/**
 * The commerce engine as a flywheel. A glossy core (the Shop) with three
 * orbits (video, LIVE, the Shop tab) carrying product and money around it,
 * and a steady inflow of creator content spiralling in from the edge.
 */

const ACCENT = new THREE.Color("#ff5a36");
const WARM = new THREE.Color("#ffc2ae");
const WHITE = new THREE.Color("#ffffff");

const RINGS = [
  { r: 1.95, tilt: [1.2, 0.2, 0], speed: 0.32, count: 150 },
  { r: 2.45, tilt: [1.45, -0.55, 0.3], speed: -0.22, count: 190 },
  { r: 3.0, tilt: [1.0, 0.7, -0.25], speed: 0.16, count: 230 },
] as const;
const INFLOW = 260;

function Core() {
  const shell = useRef<THREE.Mesh>(null);
  const cage = useRef<THREE.LineSegments>(null);
  const cageGeo = useMemo(() => new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.32, 1)), []);
  useFrame((_, dt) => {
    if (shell.current) shell.current.rotation.y += dt * 0.12;
    if (cage.current) {
      cage.current.rotation.y -= dt * 0.08;
      cage.current.rotation.x += dt * 0.04;
    }
  });
  return (
    <group>
      <mesh ref={shell}>
        <sphereGeometry args={[1.05, 96, 96]} />
        <meshPhysicalMaterial
          color="#2a2a33"
          metalness={0.1}
          roughness={0.12}
          transmission={0.75}
          thickness={1.4}
          ior={1.4}
          clearcoat={1}
          clearcoatRoughness={0.06}
          envMapIntensity={1.5}
        />
      </mesh>
      <mesh scale={0.42}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color={ACCENT} toneMapped={false} />
      </mesh>
      <lineSegments ref={cage} geometry={cageGeo}>
        <lineBasicMaterial color={WARM} transparent opacity={0.22} />
      </lineSegments>
    </group>
  );
}

function Rings() {
  return (
    <>
      {RINGS.map((ring) => (
        <mesh key={ring.r} rotation={ring.tilt as unknown as THREE.Euler}>
          <torusGeometry args={[ring.r, 0.0045, 8, 256]} />
          <meshBasicMaterial color={WHITE} transparent opacity={0.16} />
        </mesh>
      ))}
    </>
  );
}

/** Every particle in one instanced mesh, positioned per frame. */
function Particles() {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const total = RINGS.reduce((s, r) => s + r.count, 0) + INFLOW;

  const seeds = useMemo(() => {
    const list: { ring: number; phase: number; wobble: number; size: number; money: boolean }[] = [];
    RINGS.forEach((r, ri) => {
      for (let i = 0; i < r.count; i++)
        list.push({
          ring: ri,
          phase: Math.random() * Math.PI * 2,
          wobble: (Math.random() - 0.5) * 0.12,
          size: 0.012 + Math.random() * 0.022,
          money: Math.random() < 0.28,
        });
    });
    for (let i = 0; i < INFLOW; i++)
      list.push({ ring: -1, phase: Math.random(), wobble: Math.random() * Math.PI * 2, size: 0.01 + Math.random() * 0.016, money: false });
    return list;
  }, []);

  const eulers = useMemo(() => RINGS.map((r) => new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(...r.tilt))), []);
  const tmp = useMemo(() => new THREE.Object3D(), []);
  const v = useMemo(() => new THREE.Vector3(), []);

  // Colours are set once; only positions move.
  const colored = useRef(false);

  useFrame(({ clock }) => {
    const m = mesh.current;
    if (!m) return;
    const t = clock.getElapsedTime();
    seeds.forEach((s, i) => {
      if (s.ring >= 0) {
        const ring = RINGS[s.ring];
        const a = s.phase + t * ring.speed;
        const r = ring.r + s.wobble;
        v.set(Math.cos(a) * r, Math.sin(a) * r, s.wobble * 0.6).applyMatrix4(eulers[s.ring]);
      } else {
        // Inflow: spiral from the edge into the core, then start again.
        const p = (s.phase + t * 0.06) % 1;
        const r = 4.4 * (1 - p) + 1.1 * p;
        const a = s.wobble + p * 5.5;
        v.set(Math.cos(a) * r, (Math.sin(s.wobble * 3) * 1.4) * (1 - p), Math.sin(a) * r);
      }
      tmp.position.copy(v);
      const k = s.ring < 0 ? 1 - Math.abs(((s.phase + t * 0.06) % 1) - 0.5) * 0.6 : 1;
      tmp.scale.setScalar(s.size * 26 * k);
      tmp.updateMatrix();
      m.setMatrixAt(i, tmp.matrix);
      if (!colored.current) m.setColorAt(i, s.money ? ACCENT : s.ring < 0 ? WARM : WHITE);
    });
    m.instanceMatrix.needsUpdate = true;
    if (!colored.current && m.instanceColor) {
      m.instanceColor.needsUpdate = true;
      colored.current = true;
    }
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, total]}>
      <sphereGeometry args={[0.025, 8, 8]} />
      <meshBasicMaterial toneMapped={false} />
    </instancedMesh>
  );
}

/**
 * The whole rig leans gently toward the pointer. On wide screens it sits to
 * the right of the headline; on narrow ones it sits behind it, smaller.
 */
function Rig({ children }: { children: React.ReactNode }) {
  const g = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const wide = viewport.aspect > 1.1;
  useFrame(({ pointer, clock }, dt) => {
    if (!g.current) return;
    g.current.position.x = wide ? viewport.width * 0.24 : 0;
    g.current.position.y = wide ? 0.15 : 0.9;
    g.current.scale.setScalar(wide ? 1 : 0.72);
    const k = 1 - Math.exp(-dt * 2.2);
    g.current.rotation.y += (pointer.x * 0.35 + clock.getElapsedTime() * 0.03 - g.current.rotation.y) * k;
    g.current.rotation.x += (-pointer.y * 0.2 + 0.12 - g.current.rotation.x) * k;
  });
  return <group ref={g}>{children}</group>;
}

export default function HeroScene() {
  const { ref, frameloop } = useVisibleFrameloop<HTMLDivElement>();
  return (
    <div ref={ref} className="absolute inset-0">
      <Canvas
        frameloop={frameloop}
        dpr={[1, 1.75]}
        camera={{ position: [0, 0.3, 9.4], fov: 38 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Environment resolution={256}>
          <Lightformer form="rect" intensity={2} position={[0, 5, -3]} scale={[10, 2, 1]} />
          <Lightformer form="rect" intensity={2} color="#ff7a5c" position={[-5, 0, -2]} scale={[2, 6, 1]} />
        </Environment>
        <Rig>
          <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.35}>
            <Core />
            <Rings />
            <Particles />
          </Float>
        </Rig>
        <EffectComposer multisampling={0}>
          <Bloom mipmapBlur intensity={1.1} luminanceThreshold={0.35} luminanceSmoothing={0.2} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
