import { Float, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useEffect } from 'react'
import type { Euler } from 'three'
import * as THREE from 'three'

export default function TechIcon({
        model,
}: {
        model: {
                name: string
                modelPath: string
                scale: number
                rotation: number[]
        }
}) {
        const scene = useGLTF(model.modelPath)
        useEffect(() => {
                if (model.name === 'Interactive Developer') {
                        scene.scene.traverse((child: any) => {
                                if (child.isMesh && child.name === 'Object_5') {
                                        child.material = new THREE.MeshStandardMaterial({ color: 'white' })
                                }
                        })
                }
        }, [model.name,scene.scene])
        return (
                <Canvas>
                        <ambientLight intensity={0.3} />
                        <directionalLight position={[5, 5, 5]} intensity={1} />
                        <OrbitControls enableZoom={false} />
                        <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
                                <group scale={model.scale} rotation={model.rotation as unknown as Euler}>
                                        <primitive object={scene.scene} />
                                </group>
                        </Float>
                </Canvas>
        )
}
