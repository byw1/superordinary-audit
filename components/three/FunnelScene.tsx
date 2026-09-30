"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useVisibleFrameloop } from "./useVisibleFrameloop";

/**
 * Samples → posts → orders as three stacked discs, each disc's area scaled to
 * its stage's volume. Posts are the pinch: a sample either becomes a post or
 * it's wasted, and each post then multiplies into orders — so the shape is an
 * hourglass, and the post-rate slider moves the waist. Particles fall between
 * levels at the conversion rate.
 */

const Y = [1.35, 0, -1.35];

function Disc({ target, y, lit }: { target: number; y: number; lit: boolean }) {
  const g = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (!g.current) return;
    const s = g.current.scale.x + (target - g.current.scale.x) * (1 - Math.exp(-dt * 5));
    g.current.scale.set(s, 1, s);
    g.current.rotation.y += dt * 0.15;
  });
  return (
    <group ref={g} position={[0, y, 0]} scale={[target, 1, target]}>
      <mesh>
        <cylinderGeometry args={[1, 1, 0.14, 96]} />
        <meshPhysicalMaterial
          color={lit ? "#2a1510" : "#16161b"}
          metalness={0.4}
          roughness={0.2}
          clearcoat={1}
          envMapIntensity={1.3}
          transparent
          opacity={0.92}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.075, 0]}>
        <torusGeometry args={[1, 0.012, 8, 128]} />
        <meshBasicMaterial color={lit ? "#ff5a36" : "#ffc2ae"} toneMapped={false} />
      </mesh>
    </group>
  );
}

function Drops({ radii, rates }: { radii: number[]; rates: number[] }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const N = 220;
  const seeds = useMemo(
    () => Array.from({ length: N }, () => ({ level: Math.random() < 0.5 ? 0 : 1, p: Math.random(), a: Math.random() * Math.PI * 2, r: Math.random(), keep: Math.random() })),
    [],
  );
  const tmp = useMemo(() => new THREE.Object3D(), []);
  const live = useRef({ radii, rates });
  live.current = { radii, rates };

  useFrame((_, dt) => {
    const m = mesh.current;
    if (!m) return;
    const { radii: R, rates: K } = live.current;
    seeds.forEach((s, i) => {
      s.p += dt * 0.45;
      if (s.p > 1) {
        s.p = 0;
        s.level = Math.random() < 0.5 ? 0 : 1;
        s.a = Math.random() * Math.PI * 2;
        s.r = Math.random();
        s.keep = Math.random();
      }
      // A drop only falls through if it "converts" at this level's rate.
      const passes = s.keep < K[s.level];
      const top = Y[s.level] - 0.08;
      const bottom = Y[s.level + 1] + 0.08;
      const y = top + (bottom - top) * s.p;
      const rad = (R[s.level] * (1 - s.p) + R[s.level + 1] * s.p) * 0.85 * Math.sqrt(s.r);
      tmp.position.set(Math.cos(s.a) * rad, y, Math.sin(s.a) * rad);
      tmp.scale.setScalar(passes ? 1 : 0);
      tmp.updateMatrix();
      m.setMatrixAt(i, tmp.matrix);
    });
    m.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, N]}>
      <sphereGeometry args={[0.025, 6, 6]} />
      <meshBasicMaterial color="#ff8f73" toneMapped={false} />
    </instancedMesh>
  );
}

export default function FunnelScene({ values }: { values: [number, number, number] }) {
  const { ref, frameloop } = useVisibleFrameloop<HTMLDivElement>();
  const top = Math.max(...values, 1);
  const radii = values.map((v) => 0.18 + 1.25 * Math.sqrt(v / top));
  // Posts per sample, and orders per post capped so the picture stays legible.
  const rates = [values[1] / Math.max(values[0], 1), Math.min(1, values[2] / Math.max(values[1], 1) / 30)];

  return (
    <div ref={ref} className="absolute inset-0">
      <Canvas frameloop={frameloop} dpr={[1, 1.75]} camera={{ position: [0, 2.2, 7.4], fov: 36 }} gl={{ alpha: true, antialias: true }}>
        <Environment resolution={128}>
          <Lightformer form="rect" intensity={3} position={[0, 4, 2]} scale={[8, 2, 1]} />
          <Lightformer form="rect" intensity={2} color="#ff7a5c" position={[-4, 0, -2]} scale={[2, 6, 1]} />
        </Environment>
        <group position={[0.7, -0.1, 0]}>
          {radii.map((r, i) => (
            <Disc key={i} target={r} y={Y[i]} lit={i === 2} />
          ))}
          <Drops radii={radii} rates={rates} />
        </group>
        <EffectComposer multisampling={0}>
          <Bloom mipmapBlur intensity={0.9} luminanceThreshold={0.4} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
