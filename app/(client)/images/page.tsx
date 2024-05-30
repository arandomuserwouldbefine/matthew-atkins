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

type ImageObject = {
  datetime: string;
  description: string;
  id: string;
  image_url: string;
  title: string;
};

export default function ImagesSlider() {
  const liWidth = 84; //Thumb Width

  const [swiper, setSwiper] = useState<any>(null);

  const [thumbPositions, setThumbPositions] = useState<number>(0);
  const [images, setImages] = useState<ImageObject[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getImages() {
      try {
        const res = await fetch("https://matthew-atkins.vercel.app/images");
        const data = await res.json();
        setImages(data.imageDetails);
      } catch (error) {
        //Error Message of images didnt fetched
        setError("Cant Fetch Image Date, Please Try again later");
      }
    }
    getImages();
  }, []);

  const translation = `translateX(calc(50% - ${thumbPositions * liWidth}px))`;

  const handleThumbClick = (index: number) => {
    setThumbPositions(index);
    swiper.slideTo(index);
  };

  const handleSlideChanges = () => {
    const sliderAt = swiper.activeIndex;
    setThumbPositions(sliderAt);
  };

  const handleDownload = async () => {
    const imageUrl = images[swiper.activeIndex].image_url;
    try {
      const response = await fetch(imageUrl);
      if (!response.ok) throw new Error("Network response was not ok.");
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      // Set the name as you want
      link.download = images[swiper.activeIndex].title;
      document.body.appendChild(link);
      link.click();

      // Clean-up
      window.URL.revokeObjectURL(blobUrl);
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <div className="relative">
      <div className="absolute px-5 top-5 z-10 flex items-center justify-between w-full max-w-screen-lg left-1/2 transform -translate-x-1/2 text-white">
        {error && (
          <div className="px-5 rounded-sm bg-red-800 text-white text-xl font-semibold text-center absolute left-1/2 transform -translate-x-1/2">
            {error}
          </div>
        )}
        <span className="inline-flex items-center justify-center w-10 aspect-square bg-[rgba(0,0,0,0.3)] rounded-full">
          <Link href="/">
            <RxCross2 />
          </Link>
        </span>
        <div className="flex items-center gap-9">
          <span className="inline-flex items-center justify-center w-10 aspect-square bg-[rgba(0,0,0,0.3)] rounded-full">
            <Link
              href={images[swiper?.activeIndex]?.image_url || "/"}
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
      <div className="absolute px-5 z-10 max-w-screen-lg top-1/2 left-1/2 transform -translate-x-1/2 w-full flex items-center justify-between">
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
        {images.length > 0 &&
          images.map((img) => (
            <SwiperSlide key={img.id} className="darkBottomToTopGrad">
              <Image
                priority
                src={img.image_url}
                width={1400}
                height={750}
                className="h-full w-full object-contain object-center"
                alt={img.title}
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
          {images.length > 0 &&
            images.map((img, index) => (
              <li key={img.id} className="w-[84px]">
                <button
                  className="w-full h-full aspect-video"
                  onClick={() => handleThumbClick(index)}
                >
                  <Image
                    src={img.image_url}
                    alt={img.title}
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
