// src/global.d.ts
import gsap from 'gsap';

declare global {
  interface Window {
    gsap: typeof gsap;
  }
}
