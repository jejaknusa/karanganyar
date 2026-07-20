import { MapPinSearch, Star, X } from "lucide-react";
import Button from "../ui/Button";
import { useMaps } from "@/hooks/useMaps";
import { useIntlayer } from "react-intlayer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { type MouseEventHandler } from "react";
import { navigate } from "astro:transitions/client";

gsap.registerPlugin(useGSAP);

export default function DetailDestination() {
  const { detail } = useIntlayer("maps");
  const { destination, removeDestination } = useMaps((state) => state);

  const { contextSafe } = useGSAP(
    () => {
      if (destination && destination.name) {
        gsap.fromTo(
          "#detail-destination",
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.2,
            ease: "power2.out",
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.2,
            ease: "power2.out",
          },
        );
      }
    },
    { dependencies: [destination.id] },
  );

  const handleClose: MouseEventHandler<HTMLButtonElement> = contextSafe(() => {
    gsap.to("#detail-destination", {
      scale: 0.8,
      opacity: 0,
      duration: 0.2,
      ease: "power2.out",
      onComplete: () => {
        removeDestination();
      },
    });
  });

  const handleOpenGmaps = () => {
    navigate(destination.gmap);
  };
  if (!destination || !destination.name) return <div></div>;

  return (
    <div
      id="detail-destination"
      className={`glass flex gap-6 p-6 min-w-sm max-w-2xl rounded-3xl h-fit items-center pointer-events-auto`}
    >
      <div className="flex aspect-square bg-secondary size-48 rounded-xl overflow-hidden shrink-0">
        <img
          src={destination.image}
          alt={destination.name}
          className="size-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 text-secondary f">
        <div className="flex justify-between gap-6">
          <h3 className="line-clamp-1">{destination.name}</h3>
          <div className="flex gap-2 items-center">
            <Star size={24} className="fill-yellow-500 text-yellow-500" />
            <b className="text-2xl">{destination.rating}</b>
          </div>
        </div>
        <b>{destination.location}</b>
        <p className="line-clamp-2">{destination.description}</p>
        <div className="flex gap-4">
          <Button onClick={handleOpenGmaps} variant="accent" className="w-full">
            <MapPinSearch className="text-primary ml-2" size={20} />
            {detail.cta}
          </Button>
          <Button
            variant="outline"
            onClick={handleClose}
            className="w-fit text-secondary/70 hover:text-secondary border-secondary/70 hover:border-secondary"
          >
            <X
              className="text-secondary/70 hover:text-secondary mr-2"
              size={20}
            />
            {detail.close}
          </Button>
        </div>
      </div>
    </div>
  );
}
