import logoSvg from '../assets/svgs/logo.svg';
import flowerSvg from '../assets/svgs/flower.svg';

export const backgroundSvgs = [
  logoSvg,
  flowerSvg
];

export const generateRandomSvgPositions = (count = 15) => {
  const positions = [];
  for (let i = 0; i < count; i++) {
    positions.push({
      svg: backgroundSvgs[Math.floor(Math.random() * backgroundSvgs.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
      scale: 0.3 + Math.random() * 0.4
    });
  }
  return positions;
};