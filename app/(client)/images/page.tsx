"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

export default function ImagesSlider() {
  const [swiper, setSwiper] = useState<any>(null);
  const [thumbPositions, setThumbPositions] = useState<number>(0);

  useEffect(() => {}, [swiper]);

  const images = [
    { id: 0, source: "/assets/image0.jpg" },
    { id: 1, source: "/assets/image1.jpg" },
    { id: 2, source: "/assets/image2.jpg" },
    { id: 3, source: "/assets/image3.jpg" },
  ];

  useEffect(() => {
    async function getImages() {
      try {
        const res = await fetch("/api/images", {
          method : "POST",
          headers : {
            "Content-type" : "Application/json"
          }
        });
        const data = await res.json();
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    }
    getImages();
  }, []);

  const liWidth = 84;

  const translation = `translateX(calc(50% - ${thumbPositions * liWidth}px))`;

  const handleThumbClick = (index: number) => {
    setThumbPositions(index);
    swiper.slideTo(index);
  };

  const handleSlideChanges = () => {
    console.log(swiper);
    const sliderAt = swiper.activeIndex;
    setThumbPositions(sliderAt);
  };

  const handleDownload = () => {
    const imageUrl = "path/to/your/image.jpg";
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "downloaded_image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative">
      <div className="absolute top-5 z-10 flex items-center justify-between w-full max-w-screen-lg left-1/2 transform -translate-x-1/2 text-white">
        <span className="inline-flex items-center justify-center w-10 aspect-square bg-[rgba(0,0,0,0.3)] rounded-full">
          <Link href="/">
            <RxCross2 />
          </Link>
        </span>
        <div className="flex items-center gap-9">
          <span className="inline-flex items-center justify-center w-10 aspect-square bg-[rgba(0,0,0,0.3)] rounded-full">
            <Link
              href="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
              target="_blank"
            >
              <FaExternalLinkAlt />
            </Link>
          </span>
          <span className="inline-flex items-center justify-center w-10 aspect-square bg-[rgba(0,0,0,0.3)] rounded-full">
            <button onClick={handleDownload}>
              <FiDownload />
            </button>
          </span>
        </div>
      </div>
      <div className="absolute z-10 max-w-screen-lg top-1/2 left-1/2 transform -translate-x-1/2 w-full flex items-center justify-between">
        <button
          className="border border-slate-800 w-10 aspect-square rounded-full text-white bg-[rgba(0,0,0,0.3)]"
          onClick={() => swiper.slidePrev()}
        >
          <span className="inline-flex items-center justify-center w-full h-full">
            <FaChevronLeft />
          </span>
        </button>
        <button
          className="border border-slate-800 w-10 aspect-square rounded-full text-white bg-[rgba(0,0,0,0.3)]"
          onClick={() => swiper.slideNext()}
        >
          <span className="inline-flex items-center justify-center w-full h-full">
            <FaChevronRight />
          </span>
        </button>
      </div>
      <Swiper
        spaceBetween={10}
        onSwiper={setSwiper}
        onSlideChange={handleSlideChanges}
        className="h-screen bg-black"
      >
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
            transform:
              thumbPositions === 0
                ? `translateX(calc(50% - ${liWidth / 2}px))`
                : translation,
            transition: "all 0.3s ease",
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
