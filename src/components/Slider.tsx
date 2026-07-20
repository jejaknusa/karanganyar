interface SliderProps {
  className: string;
}
interface SliderIndicatorProps {
  active: number;
}

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/parallax";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EffectCoverflow, Parallax, Autoplay } from "swiper/modules";
import { useState } from "react";

function SliderNavigation() {
  const swiper = useSwiper();

  return (
    <div className="absolute bottom-2 right-2 flex gap-2 z-10">
      <button
        className="p-2 aspect-square rounded-full glass cursor-pointer"
        onClick={() => swiper.slidePrev()}
      >
        <ChevronLeft className="text-secondary" size={20} />
      </button>
      <button
        className="p-2 aspect-square rounded-full glass cursor-pointer"
        onClick={() => swiper.slideNext()}
      >
        <ChevronRight className="text-secondary" size={20} />
      </button>
    </div>
  );
}

function SliderIndicator({ active }: SliderIndicatorProps) {
  return (
    <div className="absolute left-0 top-2 flex gap-2 z-10 w-full h-1">
      {Array.from({ length: 3 }).map((item, i) => (
        <div
          key={i}
          className={`rounded-full h-1 ${active == i ? "bg-secondary" : "bg-secondary/50"} w-full`}
        ></div>
      ))}
    </div>
  );
}

export default function Slider({ className }: SliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={`${className} relative`}>
      <Swiper
        className="h-full"
        loop={true}
        autoplay={{ delay: 5000 }}
        parallax={{ enabled: true }}
        modules={[EffectCoverflow, Parallax, Autoplay]}
        effect="coverflow"
        onSlideChange={(s) => setActiveIndex(s.realIndex)}
        speed={1000}
      >
        <SliderIndicator active={activeIndex} />
        <SwiperSlide className="h-full">
          <span className="text-secondary">slide1</span>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <span className="text-secondary">slide2</span>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <span className="text-secondary">slide3</span>
        </SwiperSlide>
        <SliderNavigation />
      </Swiper>
    </div>
  );
}
