'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Suspense } from 'react'

function CongoMap() {
  return (
    <mesh>
      <boxGeometry args={[10, 0.5, 10]} />
      <meshStandardMaterial color="#1a5f3f" />
    </mesh>
  )
}

export default function CongoMap3D() {
  return (
    <div className="w-full h-[600px] bg-gray-100 rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 10, 10], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <CongoMap />
          <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  )
}

