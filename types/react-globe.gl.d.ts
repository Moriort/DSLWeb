declare module 'react-globe.gl' {
  import * as React from 'react';

  interface GlobeProps {
    globeImageUrl?: string;
    backgroundColor?: string;
    polygonsData?: any[];
    polygonCapColor?: (feature: any) => string;
    polygonSideColor?: (feature: any) => string;
    polygonStrokeColor?: (feature: any) => string;
    polygonAltitude?: number | ((feature: any) => number);
    atmosphereColor?: string;
    atmosphereAltitude?: number;
    pointsData?: any[];
    pointColor?: (point: any) => string;
    pointAltitude?: (point: any) => number;
    pointRadius?: number | ((point: any) => number);
    arcsData?: any[];
    arcColor?: (arc: any) => string;
    arcDashLength?: number;
    arcDashGap?: number;
    arcDashAnimateTime?: number;
    width?: number;
    height?: number;
    showGraticules?: boolean;
    autoRotate?: boolean;
    autoRotateSpeed?: number;
    initialAltitude?: number;
    initialRotation?: number[];
    pointLabel?: string;
    pointOfView?: (coords: {lat: number, lng: number, altitude?: number}) => void;
    controls?: () => {
      autoRotate: boolean;
      autoRotateSpeed: number;
      enableZoom: boolean;
    };
    onGlobeReady?: (globe: any) => void;
    pointsMerge?: boolean;
    arcStroke?: string | number | ((d: any) => number);
    arcsTransitionDuration?: number;
  }

  class Globe extends React.Component<GlobeProps> {
    pointOfView(coords: {lat: number, lng: number, altitude?: number}): void;
    controls(): {
      autoRotate: boolean;
      autoRotateSpeed: number;
      enableZoom: boolean;
    };
  }

  export default Globe;
}