import type { Destination } from "@/types/destination";
import { MapPin, Star } from "lucide-react";
import { Link } from "./ui/Link";
import { cn } from "@/lib/utils";

interface CardProps {
  data: Destination;
  className?: string;
}

export default function Card({ data, className }: CardProps) {
  return (
    <div
      className={cn(
        "flex p-4 flex-col justify-end relative overflow-hidden group",
        className,
      )}
    >
      <img
        src={data.image}
        alt={data.name}
        className="absolute inset-0 object-cover size-full"
      />
      <div className="glass rounded-lg flex justify-between p-4 items-center">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between gap-8">
            <Link href={`/pariwisata/${data.slug}`}>
              <h4 className="line-clamp-1 text-secondary">{data.name}</h4>
            </Link>
            <div className="flex gap-2 items-center text-secondary opacity-80">
              <Star className="text-yellow-500 fill-yellow-500" size={18} />
              <b>{data.rating}</b>
            </div>
          </div>
          <div className="flex gap-2 items-center text-secondary opacity-70">
            <MapPin className="text-secondary" size={18} />
            <b>{data.location}</b>
          </div>
        </div>
      </div>
    </div>
  );
}
