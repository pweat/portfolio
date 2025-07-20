"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { MathUtils } from "three";

const Starfield = () => {
  const ref = useRef<any>(null);

  const points = useMemo<Float32Array>(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < positions.length; i++) {
      positions[i] = (Math.random() - 0.5) * 7;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      const mouseX = state.pointer.x;
      const mouseY = state.pointer.y;

      ref.current.rotation.y = MathUtils.lerp(
        ref.current.rotation.y,
        mouseX * 0.5,
        0.1
      );
      ref.current.rotation.x = MathUtils.lerp(
        ref.current.rotation.x,
        -mouseY * 0.5,
        0.1
      );
    }
  });

  return (
    <group>
      <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const InteractiveBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Starfield />
      </Canvas>
    </div>
  );
};

export default InteractiveBackground;
