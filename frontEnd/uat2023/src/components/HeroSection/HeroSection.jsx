import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
// import image1 from 'https://static.wixstatic.com/media/5de23b_0cb19e849f344d408286e65ee85787f7~mv2.jpg/v1/fill/w_1006,h_370,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5de23b_0cb19e849f344d408286e65ee85787f7~mv2.jpg';
// import image2 from './430233779_388994224067581_6504176104002245906_n.jpg';

import "./HeroSection.css"; // Make sure to create the necessary CSS file

// const images = [image1];

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-Contain">
        <h2>
          <span>LET'S GET</span> <span className="africa">SOUTH AFRICA</span>{" "}
          <span className="transformation">SAFE AND WORKING</span>
        </h2>
        {/* <p>
          Pan-African movement aimed at eradicating poverty and guiding the
          society towards economic freedom. <br/> Let's Get It Right!
        </p> */}
        <button>Join Change</button>
      </div>
    </div>
  );
};

export default HeroSection;

//    '../../asset/392749691_299190219714649_6386634461380643900_n.jpg',
//       '../../assets/430233779_388994224067581_6504176104002245906_n.jpg'
// const texture = new THREE.TextureLoader().load('https://static.wixstatic.com/media/5de23b_9cd4c59ce17e46168e09b4e401b756aa~mv2.png/v1/fill/w_95,h_93,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/UAT%20icon.png'); // Replace with your logo texture

// import React, { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Computers = ({ isMobile }) => {
//   const computer = useGLTF("./desktop_pc/scene.gltf");

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor='black' />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />
//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.7 : 0.75}
//         position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Add a listener for changes to the screen size
//     const mediaQuery = window.matchMedia("(max-width: 500px)");

//     // Set the initial value of the `isMobile` state variable
//     setIsMobile(mediaQuery.matches);

//     // Define a callback function to handle changes to the media query
//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     };

//     // Add the callback function as a listener for changes to the media query
//     mediaQuery.addEventListener("change", handleMediaQueryChange);

//     // Remove the listener when the component is unmounted
//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);

//   return (
//     <Canvas
//       frameloop='demand'
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Computers isMobile={isMobile} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default ComputersCanvas;
