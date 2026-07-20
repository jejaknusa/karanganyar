import { useMaps } from "@/hooks/useMaps";
import Tooltip from "../ui/Tooltip";
import { Home, Map } from "lucide-react";
import { useIntlayer } from "react-intlayer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { navigate } from "astro:transitions/client";

gsap.registerPlugin(useGSAP);

export default function Tool() {
  const { tool } = useIntlayer("maps");
  const { showList, toogleList } = useMaps();
  const { contextSafe } = useGSAP(
    () => {
      if (showList) {
        gsap.to("#list-destination", {
          xPercent: 0,
          opacity: 1,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    },
    { dependencies: [showList] },
  );

  const handleToogleList = contextSafe(() => {
    if (showList) {
      gsap.to("#list-destination", {
        xPercent: -120,
        duration: 0.2,
        ease: "power2.out",
        onComplete: () => {
          toogleList();
        },
      });
    } else {
      toogleList();
    }
  });

  return (
    <div id="tool" className="flex flex-col justify-between h-full">
      <Tooltip message={tool.back}>
        <button
          onClick={() => navigate("/")}
          className={`glass p-4 rounded-2xl group hover:bg-secondary active:scale-95 pointer-events-auto transition-all duration-200 cursor-pointer`}
        >
          <Home className={`text-secondary group-hover:text-primary`} />
        </button>
      </Tooltip>
      <Tooltip message={tool.list}>
        <button
          onClick={handleToogleList}
          className={`glass p-4 rounded-2xl group hover:bg-secondary active:scale-95 pointer-events-auto transition-all duration-200 cursor-pointer ${showList && "bg-secondary!"}`}
        >
          <Map
            className={`text-secondary group-hover:text-primary ${showList && "text-primary!"}`}
          />
        </button>
      </Tooltip>
    </div>
  );
}
