"use client"

import { useRef } from "react"
import { useFrame, Canvas } from "@react-three/fiber"
import { OrbitControls, useTexture, Stars } from "@react-three/drei"

function Mars(props) {
  const meshRef = useRef()
  const textures = useTexture({
    map: "/textures/mars/mars_color.png",
    bumpMap: "/textures/mars/mars_bump.png",
    normalMap: "../mars/mars 1.jpg"
 })

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05 // Slow rotation speed
    }
  })

  return (
    <mesh ref={meshRef} {...props}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        map={textures.map}
        bumpMap={textures.bumpMap}
        normalMap={textures.normalMap}
        bumpScale={0.15}
        metalness={0.2}
        roughness={0.8}
      />
    </mesh>
  )
}

export default function RotatingMars() {
  return (
    <div className="w-full h-full absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff4040" />
        <Mars position={[0, 0, 0]} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 2 - 0.5}
          maxPolarAngle={Math.PI / 2 + 0.5}
        />
      </Canvas>
    </div>
  )
}
