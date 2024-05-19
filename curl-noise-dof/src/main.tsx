// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
import * as THREE from 'three';
import { render, events, extend } from '@react-three/fiber';
import './index.css';
import App from './App';

extend(THREE);

const onResize = () => {
  const canvas = document.querySelector('canvas');
  if (canvas) {
    render(<App />, canvas, {
      events,
      linear: true,
      camera: { fov: 25, position: [0, 0, 6] },
      gl: new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true,
      }),
    });
  }
};

window.addEventListener('resize', onResize);

// Trigger the resize event once to initialize
onResize();
