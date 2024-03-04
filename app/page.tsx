import Footer from "@/components/Footer";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <section className="bg-black text-white p-2 py-5 pt-[50px]">
        <div className="flex items-center justify-center fixed top-[20px] w-full z-[9999]">
          <Header />
        </div>
        <div className="kalnia text-[16.8vw] text-center sm:leading-[300px] leading-[200px]">
          <h1>MATTHEW</h1>
          <h1 className="">
            <span className="inline-block transform -rotate-[25deg] sm:-rotate-[11deg]">
              A
            </span>
            <span className="inline-block transform -rotate-[15deg] sm:-rotate-[8deg] -translate-y-6 sm:-translate-y-9">
              T
            </span>
            <span className="inline-block transform -rotate-[8deg] sm:-rotate-[3deg] -translate-y-10 sm:-translate-y-14">
              K
            </span>

            <span className="inline-block transform rotate-[8deg] sm:rotate-[3deg] -translate-y-10 sm:-translate-y-14">
              I
            </span>
            <span className="inline-block transform rotate-[15deg] sm:rotate-[8deg] -translate-y-6 sm:-translate-y-9">
              N
            </span>
            <span className="inline-block transform rotate-[25deg] sm:rotate-[11deg]">
              S
            </span>
          </h1>
          <p className="text-lg">Scroll Down</p>
        </div>
      </section>
      <section className="p-4 py-[60px] sm:px-[40px] lg:py-[100px] lg:px-[60px] flex items-center gap-10 flex-col lg:flex-row">
        <div className="flex flex-col gap-7 flex-1">
          <h1 className="text-4xl lg:text-7xl">
            Lorem ipsum dolor sit amet consectetur adipi
          </h1>
          <p className="text-xl lg:text-2xl font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur quibusdam placeat ullam odio pariatur laboriosam.
            Inventore debitis magni omnis quia aliquid ut labore iure culpa?
          </p>
          <p className="text-xl lg:text-2xl font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            corporis nihil delectus? Voluptates saepe magni aliquam, ut,
            assumenda quod non obcaecati, temporibus recusandae quae
            perspiciatis.
          </p>
        </div>
        <div className="flex-[0.5] max-w-[450px]">
          <Image
            src="/assets/pic.jpg"
            width={450}
            height={350}
            alt="matthew pic"
            className="w-full"
            objectFit="cover"
          />
        </div>
      </section>
      <section className="bg-black text-white p-2 lg:px-[40px] lg:p-6">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-8 gap-5">
          {[...new Array(5)].map((_, index) => {
            return (
              <div className="max-h-[300px] w-full" key={index}>
                <Link href="/images">
                  <Image
                    alt="work images"
                    width={400}
                    height={400}
                    src={`/assets/image${index}.jpg`}
                    className="w-full h-full object-cover rounded"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <section id="contact-section" className="bg-black text-white p-6 lg:px-[40px] lg:p-10 flex items-center justify-center lg:py-36">
        <div className="text-center flex flex-col gap-5 items-center">
          <h1 className="text-4xl lg:text-7xl kalnia">GET IN TOUCH</h1>
          <p className="text-xl lg:text-2xl max-w-6xl text-justify sm:text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
            minus aliquam explicabo. Esse harum minima eligendi nemo odio soluta
            ducimus cumque veritatis doloremque nisi, atque dicta, porro quis,
            commodi quasi sapiente optio sunt est repellendus!
          </p>
          <span className="block h-[2px] w-full bg-white max-w-screen-lg mx-auto"></span>
          <button className="text-lg lg:text-xl border rounded-lg px-5 py-3 hover:bg-slate-900 hover:ring-2">
            Contact Us!
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
