import { useEffect } from "react";
import { useMap } from "react-leaflet";
interface RecenterMapsProps {
  position: [number, number];
}
export default function RecenterMaps({ position }: RecenterMapsProps) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(position, 13, {
      animate: true,
      duration: 0.8,
      easeLinearity: 0.25,
    });
  }, [position]);

  return null;
}
