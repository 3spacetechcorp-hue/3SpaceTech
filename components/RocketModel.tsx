"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment, Html } from "@react-three/drei"
import { Suspense } from "react"
import styles from "@/styles/components/RocketModel.module.css"
import type * as THREE from "three"

function Model({ modelPath }: { modelPath: string }) {
  const group = useRef<THREE.Group>(null)

  // In a real implementation, we would use the actual rocket models
  // For now, we'll simulate with a more professional looking placeholder
  const { scene } = useGLTF("/models/rocket.glb")

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.1
    }
  })

  return (
    <group ref={group} dispose={null}>
      <primitive object={scene} scale={1.5} />
    </group>
  )
}

function LoadingSpinner() {
  const { viewport } = useThree()

  return (
    <Html center>
      <div className={styles.loadingSpinner}>
        <div className={styles.spinner}></div>
        <p>Loading 3D Model...</p>
      </div>
    </Html>
  )
}

export default function RocketModel({ modelPath }: { modelPath: string }) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <div className={styles.loadingContainer}>Loading 3D Model...</div>
  }

  return (
    <div className={styles.modelContainer}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Suspense fallback={<LoadingSpinner />}>
          <Model modelPath={modelPath} />
          <Environment preset="studio" />
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} minDistance={5} maxDistance={20} />
        </Suspense>
      </Canvas>

      <div className={styles.modelControls}>
        <div className={styles.controlsInfo}>
          <p>Click and drag to rotate • Scroll to zoom</p>
        </div>
        <div className={styles.rocketFeatures}>
          <div className={styles.featurePoint} style={{ top: "20%", left: "30%" }}>
            <div className={styles.featureMarker}></div>
            <div className={styles.featureTooltip}>Advanced Propulsion System</div>
          </div>
          <div className={styles.featurePoint} style={{ top: "40%", left: "70%" }}>
            <div className={styles.featureMarker}></div>
            <div className={styles.featureTooltip}>Reusable First Stage</div>
          </div>
          <div className={styles.featurePoint} style={{ top: "60%", left: "40%" }}>
            <div className={styles.featureMarker}></div>
            <div className={styles.featureTooltip}>Payload Deployment System</div>
          </div>
          <div className={styles.featurePoint} style={{ top: "80%", left: "60%" }}>
            <div className={styles.featureMarker}></div>
            <div className={styles.featureTooltip}>Recovery Parachutes</div>
          </div>
        </div>
      </div>
    </div>
  )
}
