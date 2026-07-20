import Button from "./ui/Button";
import { MapPin, Dot, Star } from "lucide-react";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/parallax";
import { EffectFade, Parallax, Autoplay } from "swiper/modules";
import type { Destination } from "@/types/destination";
import type { Culture } from "@/types/culture";
import { useState } from "react";
import { navigate } from "astro:transitions/client";

interface HeroSliderProps {
  data: Destination[] | Culture[];
}
function Indicator({ length }: { length: number }) {
  const swiper = useSwiper();
  return (
    <div className="flex gap-2 z-2">
      {Array.from({ length }).map((item, i) => (
        <div
          key={i}
          onClick={() => swiper.slideTo(i)}
          className={`rounded-full h-3 bg-secondary ${swiper.realIndex == i ? "w-16" : "w-3"} transition-all duration-1000 ease-in-out cursor-pointer`}
        ></div>
      ))}
    </div>
  );
}

export default function HeroSlider({ data }: HeroSliderProps) {
  const [active, setActive] = useState(0);
  return (
    <section className="p-0! bg-primary">
      <Swiper
        className="h-dvh"
        loop={true}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        parallax={{ enabled: true }}
        modules={[EffectFade, Parallax, Autoplay]}
        effect="fade"
        speed={1000}
        onSlideChange={(s) => setActive(s.realIndex)}
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-dvh flex flex-col justify-center bg-primary py-36 wrapper-x">
              <div className="absolute z-1 inset-0 bg-linear-120 from-primary from-20% via-primary/80 via-50% to-primary/0"></div>
              <img
                src={item.image}
                alt="Candi Cetho Header"
                className="absolute inset-0 size-full object-cover"
              />
              <div className="flex flex-col gap-6 z-2 lg:max-w-3xl max-w-md text-secondary">
                <Indicator length={data.length} />
                <h1>{item.name}</h1>
                {"rating" in item && (
                  <div className="flex gap-4 items-center">
                    <div className="flex gap-2 items-center">
                      <Star
                        size={20}
                        className="text-yellow-500 fill-yellow-500"
                      />
                      <b>{item.rating}</b>
                    </div>
                    <Dot />
                    <span className="font-semibold">{item.location}</span>
                  </div>
                )}
                <p>{item.description}</p>
                <div className="flex gap-6">
                  <Button variant="accent" onClick={() => navigate("/peta")}>
                    <MapPin className="mr-2" size={20} /> Lihat Lokasi
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
