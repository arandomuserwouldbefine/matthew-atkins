"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SlideInFromBottom } from "./animate/animation";

type ImageObject = {
  datetime: string;
  description: string;
  id: string;
  image_url: string;
  title: string;
};

export default function ImagesGrid() {
  const [images, setImages] = useState<ImageObject[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getImages() {
      try {
        const res = await fetch("/api/images");
        const data = await res.json();
        console.log(data);
        setImages(data.imageDetails);
      } catch (error) {
        //Error Message of images didnt fetched
        setError("Cant Fetch Image Date, Please Try again later");
      }
    }
    getImages();
  }, []);

  if (error) {
    return (
      <div className="min-h-[450px] flex items-center justify-center">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-8 gap-5 min-h-[450px]">
      {!(images.length > 0) &&
        [...new Array(4)].map((_, index) => {
          return (
            <div
              className="skeleton min-h-[300px] w-full rounded"
              key={index}
            >
            </div>
          );
        })}
      {images &&
        images.map((img, index) => {
          return (
            <div className="max-h-[300px] overflow-hidden w-full rounded" key={index}>
              <Link href="/images" className="inline-block w-full h-full ">
                <SlideInFromBottom className="h-full aspect-[3/2] w-full sm:w-auto">
                  <Image
                    alt={img.title}
                    width={400}
                    height={400}
                    src={img.image_url}
                    className="w-full h-full object-cover rounded"
                  />
                </SlideInFromBottom>
              </Link>
            </div>
          );
        })}
    </div>
  );
}
