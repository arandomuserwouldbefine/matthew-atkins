import { Button } from "@/components/ui/button";
import { AdminNav } from "../home/_components/adminNav";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

import RemoveBtn from "@/components/removeBtn";
import Image from "next/image";


export const dynamic = "force-dynamic";

async function fetchImages() {
  const allItems = await fetch(`https://atkins.photos/api/images`, {
    cache: "no-store",
  });

  const res = allItems.json();
  return res;
}

type ImageData = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  datetime: Date;
};

export default async function ManageImages() {
  const { imageDetails }: { imageDetails: ImageData[] } = await fetchImages();

  return (
    <>
      <div className="p-5">
        {imageDetails.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {imageDetails.map((image, index) => (
              <div key={index} className="w-full p-3 border rounded-md">
                <Image
                  src={image.image_url}
                  height={500}
                  width={350}
                  alt={image.title}
                  className="w-full aspect-[3/2] object-cover rounded-md"
                />
                <div className="mt-3">
                  <RemoveBtn id={image.id} image_url={image.image_url} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h1 className="font-bold text-center mt-8 text-3xl">No Images yet</h1>
        )}
      </div>
    </>
  );
}
