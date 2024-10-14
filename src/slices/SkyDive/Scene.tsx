"use client";

import { useRef } from "react";
import * as THREE from "three";

import { Environment } from "@react-three/drei";
import FloatingCan from "@/components/FloatingCan";

type Props = {};

export default function Scene({}: Props) {
  const groupRef = useRef<THREE.Group>(null);
  const canRef = useRef<THREE.Group>(null);
  const cloud1Ref = useRef<THREE.Group>(null);
  const cloud2Ref = useRef<THREE.Group>(null);
  const cloudsRef = useRef<THREE.Group>(null);
  const wordsRef = useRef<THREE.Group>(null);

  return (
    <group ref={groupRef}>
      <FloatingCan ref={canRef}></FloatingCan>
      <ambientLight intensity={2} color="#9DDEFA" />
      <Environment files="/hdr/field.hdr" environmentIntensity={1.5} />
    </group>
  );
}
