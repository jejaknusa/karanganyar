import karanganyar from "@/assets/geojson/karanganyar.json";
import type { GeoJsonObject } from "geojson";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMaps } from "@/hooks/useMaps";
import { useEffect, useState } from "react";
import RecenterMaps from "./RecenterMaps";
import type { Destination } from "@/types/destination";
import DestinationMarker from "./DestinationMarker";

interface MapsProps {
  data: Destination[] | undefined;
}
export default function Maps({ data }: MapsProps) {
  const [center, setCenter] = useState<[number, number]>([
    -7.6041558, 110.9534025,
  ]);
  const { destination } = useMaps((state) => state);

  useEffect(() => {
    if (destination.latitude)
      setCenter([destination.latitude, destination.longitude]);
  }, [destination]);

  return (
    <div className="absolute top-0 left-0 z-1 h-full w-full">
      <MapContainer
        zoom={12}
        center={center}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
        {data &&
          data.map((item) => (
            <DestinationMarker key={item.id} destination={item} />
          ))}
        <RecenterMaps position={center} />
        <GeoJSON
          data={karanganyar as GeoJsonObject}
          style={{
            fillColor: "transparent",
            weight: 2,
            opacity: 1,
            color: "grey",
            dashArray: "4",
          }}
        />
      </MapContainer>
    </div>
  );
}
