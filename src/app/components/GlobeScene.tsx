"use client"

import { Circle, OrbitControls, Stats } from "@react-three/drei"
import { Canvas, useLoader } from "@react-three/fiber"
import { Suspense } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export function GlobeScene() {
  const pathScene = "./scenes/globe/scene.gltf"
  const gltf = useLoader(GLTFLoader, pathScene)

  return (
    <Suspense fallback={"Loading..."}>
      <Canvas
      camera={{ position: [0, 0, 20000], near: 0.1, far: 30000 }}
        style={{ width: "1200px", height: "1200px" }}
      >
        <primitive object={gltf.scene} position={[0, 0, 0]} />
        <directionalLight position={[0, 0, 150]} />
        {/* elements that help define positioning, light and shadow */}
        {/* <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
          <meshStandardMaterial />
        </Circle>
        <Stats />
        <axesHelper args={[100]} /> */}

        <OrbitControls
          target={[0, 0, 0]}
          enablePan={false}
          autoRotate
          enableZoom={true}
        />
      </Canvas>
    </Suspense>
  )
}
