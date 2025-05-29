/* eslint-disable */
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { BlendFunction } from 'postprocessing'
import { EffectComposer, SelectiveBloom } from '@react-three/postprocessing'
import { useRef } from 'react'

type GLTFResult = any & {
        nodes: {
                _________6_blinn1_0: any
                body1_blinn1_0: any
                cabin_blinn1_0: any
                chair_body_blinn1_0: any
                comp_blinn1_0: any
                emis_lambert1_0: any
                handls_blinn1_0: any
                keyboard_blinn1_0: any
                kovrik_blinn1_0: any
                lamp_bl_blinn1_0: any
                lamp_white_blinn1_0: any
                miuse_blinn1_0: any
                monitor2_blinn1_0: any
                monitor3_blinn1_0: any
                pCylinder5_blinn1_0: any
                pillows_blinn1_0: any
                polySurface53_blinn1_0: any
                radiator_blinn1_0: any
                radiator_blinn1_0001: any
                railing_blinn1_0: any
                red_bttns_blinn1_0: any
                red_vac_blinn1_0: any
                stylus_blinn1_0: any
                table_blinn1_0: any
                tablet_blinn1_0: any
                triangle_blinn1_0: any
                vac_black_blinn1_0: any
                vacuum1_blinn1_0: any
                vacuumgrey_blinn1_0: any
                vires_blinn1_0: any
                window_blinn1_0: any
                window4_phong1_0: any
        }
        materials: {
                blinn1: any
                lambert1: any
                phong1: any
        }
        animations: any
}

export function Room(props: any) {
        const { nodes, materials } = useGLTF('/models/optimized-room.glb') as GLTFResult
        const matcapTexture = useTexture('/img/textures/mat1.png')
        const screensRef = useRef<THREE.Object3D<THREE.Event> | null>(null)
        const curtainMaterial = new THREE.MeshPhongMaterial({
                color: '#d90429',
        })

        const bodyMaterial = new THREE.MeshPhongMaterial({
                map: matcapTexture,
        })

        const tableMaterial = new THREE.MeshPhongMaterial({
                color: '#582f0e',
        })

        const radiatorMaterial = new THREE.MeshPhongMaterial({
                color: '#fff',
        })

        const compMaterial = new THREE.MeshStandardMaterial({
                color: '#fff',
        })

        const pillowMaterial = new THREE.MeshPhongMaterial({
                color: '#8338ec',
        })

        const chairMaterial = new THREE.MeshPhongMaterial({
                color: '#000',
        })
        return (
                <group {...props} dispose={null}>
                        <EffectComposer>
                                <SelectiveBloom selection={screensRef} intensity={1.5} luminanceThreshold={0.2} luminanceSmoothing={0.9} blendFunction={BlendFunction.ADD} />
                        </EffectComposer>
                        <mesh geometry={nodes._________6_blinn1_0.geometry} material={curtainMaterial} />
                        <mesh geometry={nodes.body1_blinn1_0.geometry} material={bodyMaterial} />
                        <mesh geometry={nodes.cabin_blinn1_0.geometry} material={tableMaterial} />
                        <mesh geometry={nodes.chair_body_blinn1_0.geometry} material={chairMaterial} />
                        <mesh geometry={nodes.comp_blinn1_0.geometry} material={compMaterial} />
                        <mesh ref={screensRef} geometry={nodes.emis_lambert1_0.geometry} material={materials.lambert1} />
                        <mesh geometry={nodes.handls_blinn1_0.geometry} material={materials.blinn1} />
                        <mesh geometry={nodes.keyboard_blinn1_0.geometry} material={materials.blinn1} />
                        <mesh geometry={nodes.kovrik_blinn1_0.geometry} material={materials.blinn1} />
                        <mesh geometry={nodes.lamp_bl_blinn1_0.geometry} material={materials.blinn1} />
                        <mesh geometry={nodes.lamp_white_blinn1_0.geometry} material={materials.blinn1} />
                        <mesh geometry={nodes.miuse_blinn1_0.geometry} material={materials.blinn1} />
                        <mesh geometry={nodes.monitor2_blinn1_0.geometry} material={materials.blinn1} />
                        <mesh geometry={nodes.monitor3_blinn1_0.geometry} material={materials.blinn1} />
                        <mesh geometry={nodes.pCylinder5_blinn1_0.geometry} material={materials.blinn1} />
                        <mesh geometry={nodes.pillows_blinn1_0.geometry} material={pillowMaterial} />
                        <mesh geometry={nodes.polySurface53_blinn1_0.geometry} material={materials.blinn1} />
                        <mesh geometry={nodes.radiator_blinn1_0.geometry} material={radiatorMaterial} />
                        <mesh geometry={nodes.radiator_blinn1_0001.geometry} material={materials.blinn1} />
                        <mesh geometry={nodes.railing_blinn1_0.geometry} material={materials.blinn1} />
                        <mesh geometry={nodes.red_bttns_blinn1_0.geometry} material={materials.blinn1} />
                        <mesh geometry={nodes.red_vac_blinn1_0.geometry} material={materials.blinn1} />
                        <mesh geometry={nodes.stylus_blinn1_0.geometry} material={materials.blinn1} />
                        <mesh geometry={nodes.table_blinn1_0.geometry} material={tableMaterial} />
                        <mesh geometry={nodes.tablet_blinn1_0.geometry} material={materials.blinn1} />
                        <mesh geometry={nodes.triangle_blinn1_0.geometry} material={materials.blinn1} />
                        <mesh geometry={nodes.vac_black_blinn1_0.geometry} material={materials.blinn1} />
                        <mesh geometry={nodes.vacuum1_blinn1_0.geometry} material={materials.blinn1} />
                        <mesh geometry={nodes.vacuumgrey_blinn1_0.geometry} material={materials.blinn1} />
                        <mesh geometry={nodes.vires_blinn1_0.geometry} material={materials.blinn1} />
                        <mesh geometry={nodes.window_blinn1_0.geometry} material={materials.blinn1} />
                        <mesh geometry={nodes.window4_phong1_0.geometry} material={materials.phong1} />
                </group>
        )
}

useGLTF.preload('/models/optimized-room.glb')
