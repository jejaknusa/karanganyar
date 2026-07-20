import { useMaps } from "@/hooks/useMaps";
import type { Destination } from "@/types/destination";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useIntlayer } from "react-intlayer";
import Button from "../ui/Button";
import { MoveLeft, Search, Undo2 } from "lucide-react";
import { createServerClient } from "@/lib/supabase";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ListDestinationProps {
  data: Destination[] | undefined;
}

gsap.registerPlugin(useGSAP);

export default function ListDestination({ data }: ListDestinationProps) {
  const { list } = useIntlayer("maps");
  const { setDestination, showList, destination } = useMaps((state) => state);
  const { contextSafe } = useGSAP();
  const [search, setSearch] = useState("");

  const filteredData =
    data &&
    data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );

  const showDetail = contextSafe((data: Destination) => {
    gsap.to("#detail-destination", {
      scale: 1,
      opacity: 1,
      duration: 0.2,
      ease: "power2.out",
      onStart: () => {
        setDestination(data);
      },
    });
  });

  return (
    <div
      id="list-destination"
      className={`glass shrink-0 h-full w-sm p-6 pointer-events-auto flex flex-col gap-6`}
    >
      <div className="flex">
        <div className="flex w-full items-center rounded-full ring ring-secondary text-secondary px-4 py-2">
          <input
            type="text"
            className="w-full text-secondar outline-0"
            placeholder="search..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="text-secondary/70" />
        </div>
      </div>
      <div className="h-full w-full flex flex-col gap-4 overflow-y-scroll">
        <span className="font-semibold text-secondary/80">{list.all}</span>
        {filteredData && filteredData?.length > 0 ? (
          filteredData.map((item, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  showDetail(item);
                }}
                className={cn(
                  "destination-card flex gap-2 p-2 rounded-xl items-center cursor-pointer hover:bg-secondary group",
                  item.id == destination?.id ? "bg-secondary" : "glass",
                )}
              >
                <div
                  className={cn(
                    "aspect-square bg-secondary group-hover:bg-primary rounded-md w-14 overflow-hidden",
                    item.id == destination?.id && "bg-primary",
                  )}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover h-full"
                  />
                </div>
                <div
                  className={cn(
                    "flex flex-col text-secondary w-full group-hover:text-primary",
                    item.id == destination?.id && "text-primary",
                  )}
                >
                  <b>{item.name}</b>
                  <small
                    className={cn(
                      "text-secondary/70 group-hover:text-primary/70",
                      item.id == destination?.id && "text-primary/70",
                    )}
                  >
                    {item.location}
                  </small>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex justify-center text-secondary">
            <b>Data pencarian tidak ada</b>
          </div>
        )}
        ;
      </div>
    </div>
  );
}
