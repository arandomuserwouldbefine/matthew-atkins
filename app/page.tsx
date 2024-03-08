"use client";

import CurveHeader from "@/components/CurveHeader";
import Footer from "@/components/Footer";
import ImagesGrid from "@/components/ImagesGrid";
import {
  SlideInFromBottom,
  SlideInFromRight,
} from "@/components/animate/animation";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isContactInViewport, setIsContactInViewport] = useState(false);
  const contactRef = useRef(null);
  console.log("Done...")
  console.log("Done...")
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsContactInViewport(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);
  return (
    <main>
      <section
        id="main-page"
        className="bg-black text-white p-2 py-5 pt-[50px]"
      >
        <div className="flex items-center justify-center fixed top-[20px] w-full z-[9999]">
          <SlideInFromBottom>
            <Header isContactInViewport={isContactInViewport} />
          </SlideInFromBottom>
        </div>
        <SlideInFromBottom>
          <div className="kalnia text-[16.8vw] text-center sm:leading-[300px] leading-[200px]">
            <h1>MATTHEW</h1>
            <CurveHeader />
            <p className="text-lg">Scroll Down</p>
          </div>
        </SlideInFromBottom>
      </section>
      <section className="p-4 py-[60px] sm:px-[40px] lg:py-[100px] lg:px-[60px] flex items-center gap-10 flex-col lg:flex-row">
        <div className="flex flex-col gap-7 flex-1">
          <SlideInFromBottom>
            <h1 className="text-4xl lg:text-7xl">
              Lorem ipsum dolor sit amet consectetur adipi
            </h1>
          </SlideInFromBottom>
          <SlideInFromBottom>
            <p className="text-xl lg:text-2xl font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur quibusdam placeat ullam odio pariatur laboriosam.
              Inventore debitis magni omnis quia aliquid ut labore iure culpa?
            </p>
          </SlideInFromBottom>
          <SlideInFromBottom>
            <p className="text-xl lg:text-2xl font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              corporis nihil delectus? Voluptates saepe magni aliquam, ut,
              assumenda quod non obcaecati, temporibus recusandae quae
              perspiciatis.
            </p>
          </SlideInFromBottom>
        </div>
        <div className="flex-[0.5] max-w-[450px]">
          <SlideInFromRight>
            <Image
              src="/assets/pic.jpg"
              width={450}
              height={350}
              alt="matthew pic"
              className="w-full"
              objectFit="cover"
            />
          </SlideInFromRight>
        </div>
      </section>
      <section className="bg-black text-white p-2 lg:px-[40px] lg:p-6">
        <ImagesGrid />
      </section>
      <section
        ref={contactRef}
        id="contact-section"
        className="bg-black pt-10 text-white p-6 lg:px-[40px] lg:p-10 flex items-center justify-center lg:py-36"
      >
        <div className="text-center flex flex-col gap-5 items-center">
          <SlideInFromBottom>
            <h1 className="text-4xl lg:text-7xl kalnia">GET IN TOUCH</h1>
          </SlideInFromBottom>
          <SlideInFromBottom>
            <p className="text-xl lg:text-2xl max-w-6xl text-justify sm:text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus minus aliquam explicabo. Esse harum minima eligendi
              nemo odio soluta ducimus cumque veritatis doloremque nisi, atque
              dicta, porro quis, commodi quasi sapiente optio sunt est
              repellendus!
            </p>
          </SlideInFromBottom>
          <span className="block h-[2px] w-full bg-white max-w-screen-lg mx-auto"></span>
          <Link href="mailto:atkinsmatt10@gmail.com?subject=Testing out mailto!&body=This is only a test!">
            <SlideInFromBottom>
              <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-white text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                Contact Us
              </button>
            </SlideInFromBottom>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
