"use client"

import { useState, useEffect, useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { PerspectiveCamera, Environment } from "@react-three/drei"
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing"
import { motion, AnimatePresence } from "framer-motion"
import { Vector3, MathUtils, Group, Mesh, PointLight } from "three"
import * as THREE from "three"
import styles from "../styles/components/SplashScreen.module.css"

export default function SplashScreen() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showSplash, setShowSplash] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    // Initial check
    handleResize()

    // Add listener for window resize
    window.addEventListener("resize", handleResize)

    // Set loaded state after a short delay to ensure 3D scene is ready
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    // Auto-hide splash screen after 8 seconds
    const hideTimer = setTimeout(() => {
      setShowSplash(false)
    }, 5000)

    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          className={styles.splashContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          style={{ position: "relative" }}
        >
          <Canvas shadows dpr={[1, 2]}>
            <Suspense fallback={null}>
              <Scene isLoaded={isLoaded} isMobile={isMobile} />
              <EffectComposer>
                <Bloom intensity={1.5} luminanceThreshold={0.2} luminanceSmoothing={0.9} />
                <Vignette darkness={0.7} />
              </EffectComposer>
            </Suspense>
          </Canvas>

          <AnimatePresence>
            {isLoaded && (
              <motion.div
                className={styles.companyTitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
              >
                <motion.h1
                  initial={{ letterSpacing: "0.2em" }}
                  animate={{ letterSpacing: "0.5em" }}
                  transition={{ duration: 3, ease: "easeOut" }}
                >
                  3SPACE
                </motion.h1>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 1.5 }}>
                  BEYOND THE FRONTIER
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            className={styles.skipButton}
            onClick={(e) => {
              e.preventDefault()
              setShowSplash(false)
            }}
          >
            Skip
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Scene({ isLoaded, isMobile }: { isLoaded: boolean; isMobile: boolean }) {
  const rocketRef = useRef<Group | null>(null)
  const exhaustRef = useRef<PointLight | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)

  // Animation timeline state
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    if (isLoaded) {
      // Start launch sequence after loading
      const timer = setTimeout(() => {
        setAnimationPhase(1) // Start lift-off
      }, 800)

      return () => clearTimeout(timer)
    }
  }, [isLoaded])

  useEffect(() => {
    if (animationPhase === 1) {
      // Transition to ascent phase after initial lift-off
      const timer = setTimeout(() => {
        setAnimationPhase(2)
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [animationPhase])

  useFrame((state, delta) => {
    if (!rocketRef.current || !exhaustRef.current) return

    // Rocket exhaust flicker effect
    if (animationPhase > 0) {
      exhaustRef.current.intensity = 3 + Math.random() * 2
      exhaustRef.current.distance = 10 + Math.random() * 5
    }

    // Rocket movement based on animation phase
    if (animationPhase === 1) {
      // Initial lift-off - slow vertical movement
      rocketRef.current.position.y += delta * 4

      // Slight rocket sway during lift-off
      rocketRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.02
    } else if (animationPhase === 2) {
      // Ascent phase - faster movement with trajectory
      rocketRef.current.position.y += delta * 25
      rocketRef.current.position.z -= delta * 8

      // Gradual tilt as the rocket ascends
      rocketRef.current.rotation.x = MathUtils.lerp(rocketRef.current.rotation.x, -0.3, delta * 0.5)
    }

    // Camera follows rocket with slight lag
    if (cameraRef.current && animationPhase > 0 && rocketRef.current) {
      const cameraTarget = new Vector3(0, rocketRef.current.position.y - 2, rocketRef.current.position.z + 8)

      state.camera.position.lerp(cameraTarget, delta * 1.5)
      state.camera.lookAt(rocketRef.current.position.x, rocketRef.current.position.y + 2, rocketRef.current.position.z)
    }
  })

  return (
    <>
      <color attach="background" args={["#000000"]} />

      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 10]} fov={isMobile ? 75 : 60} />

      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />

      {/* Launch pad with rocket */}
      <group position={[0, -4, 0]}>
        {/* Launch platform */}
        <mesh position={[0, -0.5, 0]} receiveShadow>
          <cylinderGeometry args={[3, 3, 0.5, 32]} />
          <meshStandardMaterial color="#333" roughness={0.8} metalness={0.3} />
        </mesh>

        {/* Support structure */}
        <mesh position={[0, -1.25, 0]} receiveShadow>
          <cylinderGeometry args={[2, 2.5, 1.5, 32]} />
          <meshStandardMaterial color="#555" roughness={0.7} metalness={0.5} />
        </mesh>

        {/* Launch tower */}
        <mesh position={[2, 2, 0]} castShadow>
          <boxGeometry args={[0.5, 10, 0.5]} />
          <meshStandardMaterial color="#666" roughness={0.6} metalness={0.4} />
        </mesh>

        {/* Rocket */}
        <group ref={rocketRef} position={[0, 0, 0]}>
          {/* Rocket body */}
          <mesh castShadow position={[0, 3, 0]}>
            <cylinderGeometry args={[0.5, 0.5, 6, 32]} />
            <meshStandardMaterial color="white" roughness={0.3} metalness={0.7} />
          </mesh>

          {/* Nose cone */}
          <mesh castShadow position={[0, 6.5, 0]}>
            <coneGeometry args={[0.5, 1, 32]} />
            <meshStandardMaterial color="#ddd" roughness={0.4} metalness={0.6} />
          </mesh>

          {/* Fins (4) */}
          {[0, Math.PI / 2, Math.PI, Math.PI * 1.5].map((rotation, i) => (
            <mesh key={i} castShadow position={[0, 0.5, 0]} rotation={[0, rotation, 0]}>
              <boxGeometry args={[0.1, 1, 1]} />
              <meshStandardMaterial color="#ccc" roughness={0.5} metalness={0.5} />
            </mesh>
          ))}

          {/* Company logo */}
          <mesh position={[0, 4, 0.51]} rotation={[0, 0, 0]}>
            <planeGeometry args={[0.8, 0.8]} />
            <meshStandardMaterial color="#111" roughness={0.5} metalness={0.5} />
          </mesh>

          {/* Rocket windows */}
          {[-0.5, 0, 0.5].map((y, i) => (
            <mesh key={i} position={[0, y + 3, 0.51]} rotation={[0, 0, 0]}>
              <circleGeometry args={[0.15, 32]} />
              <meshStandardMaterial
                color="#88ccff"
                roughness={0.2}
                metalness={0.8}
                emissive="#4488ff"
                emissiveIntensity={0.5}
              />
            </mesh>
          ))}

          {/* Rocket exhaust */}
          <pointLight
            ref={exhaustRef}
            position={[0, -0.5, 0]}
            color="#ff7700"
            intensity={animationPhase > 0 ? 5 : 0}
            distance={15}
            decay={2}
          />

          {/* Exhaust particles */}
          {animationPhase > 0 && <Exhaust position={[0, -0.5, 0]} />}
        </group>
      </group>

      {/* Environment lighting */}
      <Environment preset="night" />
    </>
  )
}

function Exhaust({ position }: { position: [number, number, number] | Vector3 }) {
  const particles = useRef<Group | null>(null)

  useFrame((state, delta) => {
    if (!particles.current) return

    // Animate each particle in the exhaust
    particles.current.children.forEach((particle) => {
      // Type assertion for Mesh type
      const meshParticle = particle as Mesh

      // Move particle downward
      meshParticle.position.y -= (2 + Math.random() * 3) * delta

      // Random horizontal movement
      meshParticle.position.x += (Math.random() - 0.5) * delta
      meshParticle.position.z += (Math.random() - 0.5) * delta

      // Fade out and shrink
      if (meshParticle.userData.life > 0) {
        meshParticle.userData.life -= delta * 2
        meshParticle.scale.setScalar(meshParticle.userData.life * meshParticle.userData.initialScale)
      } else {
        // Reset particle
        meshParticle.position.set((Math.random() - 0.5) * 0.2, 0, (Math.random() - 0.5) * 0.2)
        meshParticle.userData.life = 1
      }
    })
  })

  return (
    <group position={position}>
      <group ref={particles}>
        {Array.from({ length: 40 }).map((_, i) => (
          <mesh
            key={i}
            position={[0, 0, 0]}
            userData={{ life: Math.random(), initialScale: 0.1 + Math.random() * 0.2 }}
          >
            <sphereGeometry args={[0.2, 8, 8]} />
            <meshBasicMaterial color={i % 2 === 0 ? "#ff7700" : "#ffaa00"} transparent opacity={0.8} />
          </mesh>
        ))}
      </group>
    </group>
  )
}
