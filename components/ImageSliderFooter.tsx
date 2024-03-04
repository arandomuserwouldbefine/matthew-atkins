import Image from "next/image";

export default function ImageSliderFooter() {
  const imageDate = [
    {
      id: 0,
      imageUrl: "/assets/image0.jpg",
    },
    {
      id: 1,
      imageUrl: "/assets/image1.jpg",
    },
    {
      id: 2,
      imageUrl: "/assets/image2.jpg",
    },
    {
      id: 3,
      imageUrl: "/assets/image3.jpg",
    },
    {
      id: 4,
      imageUrl: "/assets/image4.jpg",
    },
  ];
  return (
    <div>
      <div className="flex">
        {imageDate.map((images) => (
          <Image
            key={images.id}
            src={images.imageUrl}
            width={100}
            height={150}
            alt={images.imageUrl}
            className="h-full object-contain"
          />
        ))}
      </div>
    </div>
  );
}
