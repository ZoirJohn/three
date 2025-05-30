import { Canvas } from '@react-three/fiber'
import { Computer } from './Models/TechLogos/Computer-optimized'
import { OrbitControls } from '@react-three/drei'

export default function ContactExperience() {
        return (
                <Canvas camera={{ position: [0, 3, 7], fov: 45 }} shadows>
                        <ambientLight intensity={0.5} color='#fff4e6' />
                        <directionalLight position={[5, 5, 3]} intensity={2.5} color='#ffd9b3' />
                        <directionalLight position={[5, 9, 1]} intensity={2.5} color='#ffd9b3' castShadow />
                        <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2} />
                        <group scale={0.03} position={[0, -1.5, -2]} castShadow>
                                <Computer />
                        </group>
                        <group scale={[1, 1, 1]} castShadow>
                                <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                                        <planeGeometry args={[30, 30]} />
                                        <meshStandardMaterial color='#a46b2d' />
                                </mesh>
                        </group>
                </Canvas>
        )
}
5
