"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { MODELS } from "./Model3D";
import * as THREE from "three";

// --- Constants (Stateless) ---
const MORNING_BLUE = new THREE.Color(0x8fb3d9);

const Plane = React.forwardRef<THREE.Group, ThreeElements['group']>((props, ref) => {
  const { scene } = useGLTF(MODELS.AIRBUS_A380);

  return (
    <group ref={ref} {...props}>
      {/* Rotate the model 90 degrees (Math.PI / 2) from the original orientation */}
      <primitive object={scene} rotation={[0, -Math.PI / 2, 0]} />
    </group>
  );
});
Plane.displayName = "Plane";

const RunwaySegment = ({ x }: { x: number }) => {
  // Simple materials for runway, no longer using context
  const RUNWAY_MATERIAL = useMemo(() => new THREE.MeshStandardMaterial({ color: 0x151515 }), []);
  const MARKING_MATERIAL = useMemo(() => new THREE.MeshBasicMaterial({ color: 0xffffff }), []);
  const RUNWAY_GEOMETRY = useMemo(() => new THREE.PlaneGeometry(3000, 120), []);
  const MARKING_GEOMETRY = useMemo(() => new THREE.PlaneGeometry(40, 4), []);

  const markings = useMemo(() => {
    const items = [];
    for (let i = -1400; i < 1400; i += 200) items.push(i);
    return items;
  }, []);

  return (
    <group position={[x, -5, 0]}>
      <mesh geometry={RUNWAY_GEOMETRY} material={RUNWAY_MATERIAL} rotation={[-Math.PI / 2, 0, 0]} />
      {markings.map((offset, i) => (
        <mesh key={i} geometry={MARKING_GEOMETRY} material={MARKING_MATERIAL} position={[offset, 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      ))}
    </group>
  );
};

const Clouds = React.forwardRef<THREE.Group>((_, ref) => {
  const CLOUD_MATERIAL = useMemo(() => new THREE.MeshLambertMaterial({ color: 0xffffff, transparent: true, opacity: 0.6, depthWrite: false }), []);
  const CLOUD_GEOMETRY = useMemo(() => new THREE.IcosahedronGeometry(1, 1), []);

  const [clouds] = React.useState(() =>
    new Array(200).fill(0).map(() => ({
      scale: [Math.random() * 40 + 20, Math.random() * 15 + 10, Math.random() * 40 + 20] as [number, number, number],
      position: [Math.random() * 8000 - 4000, Math.random() * 600 + 100, Math.random() * 3000 - 1500] as [number, number, number],
    }))
  );

  return (
    <group ref={ref}>
      {clouds.map((data, i) => (
        <mesh key={i} geometry={CLOUD_GEOMETRY} material={CLOUD_MATERIAL} scale={data.scale} position={data.position} />
      ))}
    </group>
  );
});
Clouds.displayName = "Clouds";

// --- Scene Logic ---
const SceneContent = () => {
  const planeRef = useRef<THREE.Group>(null);
  const runwayRef = useRef<THREE.Group>(null);
  const cloudsRef = useRef<THREE.Group>(null);
  const speedRef = useRef(0);

  useFrame((state) => {
    if (!planeRef.current || !runwayRef.current || !cloudsRef.current) return;
    const { clock, camera } = state;
    const elapsed = clock.getElapsedTime();
    const cycle = elapsed % 24;
    const plane = planeRef.current;

    // --- Takeoff Sequence ---
    if (cycle < 10) {
      speedRef.current = THREE.MathUtils.lerp(speedRef.current, 25, 0.01);
      plane.position.y = -1.5 + (Math.random() * 0.05);
      plane.rotation.z = 0;
      if (camera instanceof THREE.PerspectiveCamera) camera.fov = THREE.MathUtils.lerp(camera.fov, 50, 0.05);
    } else if (cycle < 14) {
      const t = (cycle - 10) / 4;
      plane.rotation.z = THREE.MathUtils.smoothstep(t, 0, 1) * 0.25;
      plane.position.y = -1.5 + (t * 1.5);
      speedRef.current += 0.2;
      if (camera instanceof THREE.PerspectiveCamera) camera.fov = THREE.MathUtils.lerp(camera.fov, 60, 0.05);
    } else {
      speedRef.current *= 1.01;
      plane.position.y += 0.8;
      plane.rotation.z = 0.25;
    }

    if (camera instanceof THREE.PerspectiveCamera) camera.updateProjectionMatrix();

    // --- Infinite Scenery ---
    runwayRef.current.position.x -= speedRef.current;
    runwayRef.current.children.forEach((child) => {
      if (child.position.x + runwayRef.current!.position.x < -3000) child.position.x += 6000;
    });
    cloudsRef.current.children.forEach((child) => {
      child.position.x -= speedRef.current * 0.10;
      if (child.position.x < -4000) child.position.x = 4000;
    });

    // --- Camera Tracking ---
    const { width } = state.size;
    const isMobile = width < 768;
    const targetPos = new THREE.Vector3();
    const lookAtPos = new THREE.Vector3(plane.position.x + 30, plane.position.y, 0);

    if (cycle < 10) {
      // Adjust initial camera for mobile
      if (isMobile) {
        targetPos.set(60, 15, 80);
        lookAtPos.set(plane.position.x + 10, plane.position.y, 0);
      } else {
        targetPos.set(40, 2, 40);
      }
      camera.position.lerp(targetPos, 0.05);
    } else {
      if (isMobile) {
        targetPos.set(plane.position.x - 120, plane.position.y + 30, 80);
      } else {
        targetPos.set(plane.position.x - 80, plane.position.y + 20, 50);
      }
      camera.position.lerp(targetPos, 0.03);
      lookAtPos.setZ(isMobile ? -10 : -30);
    }
    camera.lookAt(lookAtPos);
  });

  return (
    <>
      <ambientLight intensity={0.8} color={0xffffff} />
      <directionalLight position={[500, 300, -500]} intensity={4} color={0xffffff} />
      <Plane ref={planeRef} scale={[0.12, 0.12, 0.12]} />
      <group ref={runwayRef}>
        <RunwaySegment x={0} />
        <RunwaySegment x={3000} />
      </group>
      <Clouds ref={cloudsRef} />
    </>
  );
};

const DrivingScene = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-slate-900">
      <Canvas
        camera={{ position: [60, 12, 50], fov: 50, far: 20000 }}
        shadows
        gl={{
          antialias: true,
          logarithmicDepthBuffer: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.5,
        }}
        dpr={[1, 2]}
      >
        <color attach="background" args={[MORNING_BLUE]} />
        <fogExp2 attach="fog" args={[MORNING_BLUE, 0.0006]} />
        <SceneContent />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-200/5 to-transparent pointer-events-none" />
    </div>
  );
};

export default DrivingScene;