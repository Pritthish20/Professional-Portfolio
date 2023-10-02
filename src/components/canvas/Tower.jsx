import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Tower = ({ isMobile }) => {
  const alpha = useGLTF("./alpha_tower/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="#4E5781" />
      <ambientLight intensity={2.4} />
      <pointLight intensity={1} position={[800, 600, 400]} />
      <directionalLight
        intensity={1.6}
        color="gray"
        position={[800, 600, 700]}
      />
      <spotLight
        position={[100, 70, 110]}
        angle={0.4}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={3033}
      />
      <primitive
        object={alpha.scene}
        scale={isMobile ? 0.7 : 1}
        position={isMobile ? [0, -2.8, 0] : [0, -5, 0]}
        rotation={isMobile ? [0, 4, 0] : [0, 0, 0]}
      />
    </mesh>
  );
};

const TowerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:1600px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <div className="absolute inset-0 z-[-2]">
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1,3]}
        camera={{ position: [5, 3, 5], fov: 45 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate={true}
            autoRotateSpeed={isMobile ? 0.31:0.19}
            enableZoom={false}
            maxPolarAngle={Math.PI / 4}
            minPolarAngle={Math.PI / 4}
          />
          <Tower isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default TowerCanvas;
