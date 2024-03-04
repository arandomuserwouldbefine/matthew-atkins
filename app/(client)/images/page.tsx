"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImagesSlider() {
  const [swiper, setSwiper] = useState<any>(null);
  const [thumbPositions, setThumbPositions] = useState<number>(0);

  useEffect(() => {
    console.log(swiper);
  }, [swiper]);

  const images = [
    { id: 0, source: "/assets/image0.jpg" },
    { id: 1, source: "/assets/image1.jpg" },
    { id: 2, source: "/assets/image2.jpg" },
    { id: 3, source: "/assets/image3.jpg" },
  ];

  const liWidth = 84;
  const translation = `translateX(calc(50% - ${thumbPositions * liWidth}px))`;

  const handleThumbClick = (index: number) => {
    setThumbPositions(index);
    swiper.slideTo(index);
  };
  return (
    <div className="relative">
      <Swiper spaceBetween={10} onSwiper={setSwiper} className="h-screen bg-black">
        {images.map((img) => (
          <SwiperSlide key={img.id} className="darkBottomToTopGrad">
            <Image
              priority
              src={img.source}
              width={1400}
              height={750}
              className="h-full w-full object-contain object-center"
              alt={img.source}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute left-0 bottom-4 z-10 w-full overflow-hidden">
        <ul
          className="flex gap-2 h-[56px]"
          style={{
            transform: thumbPositions === 0 ? `translateX(calc(50% - ${liWidth / 2}px))` : translation,
            transition : "all 0.3s ease"
          }}
        >
          {images.map((img, index) => (
            <li key={img.id} className="w-[84px]">
              <button
                className="w-full h-full aspect-video"
                onClick={() => handleThumbClick(index)}
              >
                <Image
                  src={img.source}
                  alt={img.source}
                  width={84}
                  height={56}
                  className="h-full w-full object-cover rounded"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
