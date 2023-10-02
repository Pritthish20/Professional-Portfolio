import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Car = ({isMobile}) => {
  const alpha = useGLTF("./bottled_car/scene.gltf")
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <ambientLight intensity={0.5}/>
      <pointLight intensity={1.5} position={[400,400,400]}/>
      <directionalLight  intensity={3} color="white" position={[1000, 800, 700]} />
      <spotLight
        position={[100, 70, 110]}
        angle={0.4}
        penumbra={4}
        intensity={3}
        castShadow
        shadow-mapSize={2056}
      />
      <primitive
        object={alpha.scene}
        scale={isMobile ? 12 : 20}
        position={isMobile ? [0,-1,0] : [0, -0.75, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const CarCanvas = () => {
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
      camera={{ position: [5, 3, 5], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        autoRotate
         enableZoom={false} 
         maxPolarAngle={Math.PI/4}
         minPolarAngle={Math.PI/2}
        />
        <Car isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default CarCanvas;
