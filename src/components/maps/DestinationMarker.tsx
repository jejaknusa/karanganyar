import { useMaps } from "@/hooks/useMaps";
import { createServerClient } from "@/lib/supabase";
import type { Destination } from "@/types/destination";
import L from "leaflet";
import { useEffect, useState } from "react";
import { Marker, Popup } from "react-leaflet";

interface DestinationMarkerProps {
  destination: Destination;
}

export default function DestinationMarker({
  destination,
}: DestinationMarkerProps) {
  const { destination: activeDestination, setDestination } = useMaps(
    (state) => state,
  );

  // const [isActive, setActive] = useState(
  //   destination.id == activeDestination.id,
  // );

  // useEffect(()=>{
  //   setActive()
  // })

  const MarkerIcon = new L.DivIcon({
    className: "bg-transparent border-none",
    html: `
      <div class="w-12 h-12 rounded-full border-2 shadow-lg overflow-hidden flex items-center justify-center bg-white ${destination.id == activeDestination.id ? "border-accent scale-125 border-3" : "scale-90 border-secondary"} transition-all duration-300">
        <img
          src="${destination.image}"
          alt="Destinasi"
          class="w-full h-full object-cover"
        />
      </div>
    `,
    iconSize: [48, 48],
    iconAnchor: [24, 48],
    popupAnchor: [0, -48],
  });

  return (
    <Marker
      position={[destination.latitude, destination.longitude]}
      icon={MarkerIcon}
      eventHandlers={{
        click: () => {
          setDestination(destination);
        },
      }}
    >
      <Popup>{destination.name}</Popup>
    </Marker>
  );
}
