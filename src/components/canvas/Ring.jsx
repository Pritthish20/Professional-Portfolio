import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ring = ({isMobile}) => {
  const alpha = useGLTF("./dyson_rings/scene.gltf")
  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      <ambientLight intensity={0.8}/>
      <pointLight intensity={1.6} position={[400,400,400]}/>
      <directionalLight  intensity={1.6} color="white" position={[800, 600, 700]} />
      <spotLight
        position={[100, 70, 110]}
        angle={0.4}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={2056}
      />
      <primitive
        object={alpha.scene}
        scale={isMobile ? 0.9 : 0.6}
        position={isMobile ? [0,50,5] : [0, 20, 0]}
        rotation={[-5, -5, 0]}
      />
    </mesh>
  );
};

const RingCanvas = () => {
  const[isMobile,setIsMobile]=useState(false);

  useEffect(() => {
    const mediaQuery=window.matchMedia("(max-width:1600px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange=(event) => {
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change',handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    };
  },[])
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1,2]}
      camera={{ position: [8, 3, 5], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        autoRotate
         enableZoom={false} 
         maxPolarAngle={Math.PI/8}
         minPolarAngle={Math.PI/4}
        />
        <Ring isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default RingCanvas;
