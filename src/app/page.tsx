"use client";
import React from "react";
import { useState, useEffect } from "react";
import Testimonials, {
  HCard,
} from "@/components/atomics/testimonials.card.module";
import { axiosInstance } from "@/utils/api/product.teams.api";
import { useRouter } from "next/navigation";
import Navbar from "@/components/atomics/navbar.module";
import Footer from "@/components/atomics/footer.module";

export default function Landing() {
  const router = useRouter();
  const [testimonials, setTestimonials] = useState<HCard[]>([]);
    
  
    async function getAllTestimonials() {
      try {
        const response = await axiosInstance.get("/testimonials", {
          params: { loadRelations: "product_bought" },
        });
        console.log("Fetched Testimonials:", response.data);
        setTestimonials(response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        alert("Maaf data tidak bisa diambil. Silakan cek sumber data");
      }
    }
  
    useEffect(() => {
      getAllTestimonials();
    }, []);
  
    useEffect(() => {}, [testimonials]);
  

  function navigate(pathname: string) {
    router.push(pathname);
  }
  return (
    <>
          <Navbar />
          <div className="bg-container w-screen min-h-screen bg-white flex flex-col items-center">
        <section
          className="relative h-screen w-full bg-cover bg-no-repeat z-10"
          style={{
            backgroundImage: "url('/aw.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-opacity-80 backdrop-brightness-50 flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-10">
              Welcome to Salma's Beauty
            </h1>
            <h2 className="text-xl md:text-2xl mb-10">
              "Timeless Beauty, Effortless Glow – Salma's Beauty, Your Skincare
              Companion."
            </h2>
            <p className="mt-4 text-base md:text-lg text-justify text-white max-w-[800px]">
              Salma’s Beauty adalah perusahaan di bidang skincare dan makeup
              yang menghadirkan produk-produk terbaik dari brand-brand ternama,
              dengan komitmen terhadap keaslian, kualitas, dan kepuasan
              pelanggan. Berawal dari passion untuk menyediakan solusi
              kecantikan yang terpercaya, perusahaan ini terus berkembang dan
              menjadi destinasi pilihan bagi pecinta kecantikan. Sejak didirikan
              pada 2010, Salma’s Beauty telah membangun reputasi sebagai
              penyedia produk kecantikan unggulan, membantu setiap individu
              menampilkan pesona autentik mereka dengan elegansi dan percaya
              diri.
            </p>
            <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 w-full max-w-[1000px] mx-auto">
              {[
                "ysl.jpg",
                "mac.jpg",
                "sk.jpg",
                "COSRX.jpg",
                "dioe.jpg",
                "la.jpg",
              ].map((logo, index) => (
                <div key={index} className="flex justify-center items-center">
                  <img
                    src={`/${logo}`}
                    alt={logo}
                    className="w-16 h-16 md:w-32 md:h-32 object-contain mx-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="z-20 py-12 px-4 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">
            Selayang Pandang Perusahaan
          </h2>
          <p className="text-justify text-white max-w-[800px] leading-relaxed">
            Salma’s Beauty lahir dari komitmen untuk menghadirkan produk
            skincare dan makeup berkualitas tinggi yang mampu memenuhi beragam
            kebutuhan kecantikan. Dengan visi menjadi destinasi utama bagi para
            pecinta kecantikan, kami menghadirkan koleksi eksklusif dari
            brand-brand ternama yang telah teruji kualitas dan keasliannya. Kami
            percaya bahwa kecantikan sejati berasal dari kepercayaan diri, dan
            produk yang tepat dapat membantu setiap individu menampilkan pesona
            terbaik mereka. Sejak didirikan pada 2010, Salma’s Beauty terus
            berkembang dan memperluas jangkauannya dengan menyediakan berbagai
            pilihan produk dari merek-merek terpercaya, memastikan pelanggan
            mendapatkan akses mudah ke tren dan inovasi terbaru di dunia
            kecantikan. Kami berkomitmen untuk memberikan pengalaman berbelanja
            yang aman dan nyaman, dengan layanan yang mengutamakan kepuasan
            pelanggan. Dengan lebih dari satu dekade pengalaman, Salma’s Beauty
            telah membangun reputasi sebagai penyedia produk kecantikan unggulan
            yang dipercaya oleh banyak pelanggan. Kami terus beradaptasi dengan
            perkembangan industri, menghadirkan produk-produk terbaik, dan
            memberikan edukasi seputar kecantikan agar pelanggan dapat membuat
            pilihan yang tepat sesuai dengan kebutuhan mereka. Sebagai
            perusahaan yang berorientasi pada kualitas dan kepuasan pelanggan,
            Salma’s Beauty akan terus menghadirkan solusi kecantikan yang
            **elegan, inovatif, dan terpercaya, membantu setiap individu
            merayakan kecantikan autentik mereka dengan penuh percaya diri.
          </p>
        </div>

        <div className="text-center mb-10">
          <button
            className="bg-pink-600 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded transition duration-300"
            onClick={() => navigate("/about-us")}
          >
            Baca Selengkapnya
          </button>
        </div>
        <div className="relative py-12 px-4 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">
            Produk
          </h2>
          <p className="text-justify text-white max-w-[800px] leading-relaxed">
          Sejak berdiri, kami berkomitmen untuk menghadirkan produk berkualitas tinggi yang telah teruji dan aman, membantu pelanggan menemukan solusi perawatan kulit dan tampilan makeup terbaik. Dengan koleksi yang lengkap, mulai dari serum, pelembap, hingga foundation dan lipstik, Salma’s Beauty memastikan setiap individu dapat merawat kecantikan mereka dengan produk asli dan harga terbaik. Kami tidak hanya menawarkan produk, tetapi juga pengalaman belanja yang nyaman dengan pelayanan profesional, menjadikan Salma’s Beauty sebagai pilihan utama bagi pecinta kecantikan yang menginginkan kualitas, kepercayaan, dan kepuasan dalam setiap pembelian. ✨💖
          </p>
        </div>

        <div className="text-center mb-10">
          <button
            className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded transition duration-300"
            onClick={() => navigate("/products")}
          >
            Lihat Produk
          </button>
        </div>

        <div className="relative py-12 px-4 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">
            Apa Kata Mereka?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center w-full">
            {testimonials.map((item: HCard, key: number) => (
              <Testimonials
                key={key}
                userName={item?.userName}
                product_bought={item?.product_bought}
                review={item?.review}
                userImage={item?.userImage}
              />
            ))}
          </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
