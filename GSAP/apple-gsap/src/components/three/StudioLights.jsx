import React from 'react'
import { Group } from 'three/examples/jsm/libs/tween.module.js'
import { Environment, Lightformer } from '@react-three/drei'
import { Light } from 'three'

const StudioLights = () => {
  return (
    <group name="lights">
        <Environment resolution={256}>
            <group>
                <Lightformer 
                    form='rect'
                    intensity={10}
                    position={[-10, 5, -5]}
                    scale={10}
                    rotation-y={Math.PI / 2}
                ></Lightformer>
                <Lightformer 
                    form='rect'
                    intensity={10}
                    position={[10, 0, 1]}
                    scale={10}
                    rotation-y={Math.PI / 2}
                ></Lightformer>
                <spotLight
                    position={[-2, 10, 50]}
                    angle={0.15}
                    decay={0}
                    intensity={Math.PI * 0.2}
                >
                </spotLight>
                <spotLight
                    position={[2, -25, 10]}
                    angle={0.15}
                    decay={0}
                    intensity={Math.PI * 0.2}
                >
                </spotLight>
                <spotLight
                    position={[0, 15, 5]}
                    angle={0.15}
                    decay={0.1}
                    intensity={Math.PI * 1}
                >
                </spotLight>
            </group>
        </Environment>
    </group>
  )
}

export default StudioLights