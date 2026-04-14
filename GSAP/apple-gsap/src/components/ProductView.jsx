import React from 'react'
import clsx from 'clsx'
import useMacbookStore from '../store'
import {Canvas} from '@react-three/fiber'
import { Box, OrbitControls } from '@react-three/drei';
import MacbookModel14 from './models/Macbook-14'

const ProductView = () => {
  const {color, scale, setColor, setScale} = useMacbookStore();

  return (
    <section id="product-viewer">
        <h2>Take a closer look.</h2>

        <div className="controls">
          <p className="info">Macbook Pro {scale === 0.06 ? `14"` :`16"`} in {color == "2e2c2e" ? `Silver` : `White`}</p>

          <div className='flex-center gap-5 mt-5'>
            <div className="color-control">
              <div 
                className={clsx('bg-neutral-300', color==="#adb5bd" && 'active')}
                onClick={() => setColor('#adb5bd')}>
              </div>
              <div 
                className={clsx('bg-neutral-900', color==="#2e2c2e" && 'active')}
                onClick={() => setColor('#2e2c2e')}>
              </div>
            </div>

            <div className='size-control'>
              <div 
                className={clsx(scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white')}
                onClick={() => setScale(0.06)}>
                  <span>14"</span>
              </div>
              <div 
                className={clsx(scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white')}
                onClick={() => setScale(0.08)}>
                  <span>16"</span>
              </div>
            </div>
          </div>
        </div>

    <Canvas id = "canvas" camera={{position: [0,2,5], fov: 50, near: 0.1, far: 100}}>
      <ambientLight intensity={10}></ambientLight>

      <MacbookModel14 scale={0.06} position={[0, 0, 0]}></MacbookModel14>
      
      <OrbitControls enableZoom={false}></OrbitControls>
    </Canvas>
    </section>    
  )
}

export default ProductView;