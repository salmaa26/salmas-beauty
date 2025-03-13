"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AboutCard, { ACard } from "../atomics/about.us.card.module";
import { axiosInstance } from "@/utils/api/product.teams.api";
import Image from "next/image";

export default function AboutUs() {
  const [teams, setTeams] = useState<ACard[]>([]);
  const router = useRouter();

  async function getAllTeams() {
    try {
      const response = await axiosInstance.get("/teams");
      setTeams(response.data);
    } catch (error) {
      console.error("Error fetching teams data:", error);
      alert("Maaf data tidak bisa diambil. Silakan cek sumber data");
    }
  }

  useEffect(() => {
    getAllTeams();
  }, []);

  function navigate(pathname: string) {
    router.push(pathname);
  }

  return (
    <div className="bg-container w-full h-full flex flex-col gap-y-5 justify-center items-center p-10 pt-20">
      <h4 className="flex justify-center text-3xl items-center font-bold mb-5 text-white mt-16">
        {" "}
        Tentang Kami{" "}
      </h4>
      <div className="w-full h-full flex flex-col p-10 text-center text-white">
        <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
          <Image
            src="/bu.jpg"
            alt="Salmas Beauty"
            width={2000}
            height={2000}
            className="w-full rounded-lg shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Sejarah Perusahaan
            </h2>
            <p className="text-justify text-white">
              Salma Beauty didirikan dengan visi untuk menghadirkan produk
              kecantikan berkualitas dari berbagai merek ternama kepada para
              pecinta skincare dan makeup. Berawal dari kecintaan terhadap dunia
              kecantikan dan keinginan untuk menyediakan produk terbaik bagi
              pelanggan, perusahaan ini mulai beroperasi sebagai distributor
              resmi berbagai brand ternama. Dengan komitmen untuk memberikan
              pengalaman belanja yang terpercaya dan nyaman, Salma Beauty terus
              berkembang, membangun jaringan dengan merek-merek global, serta
              menghadirkan produk yang telah teruji kualitasnya. Seiring waktu,
              perusahaan ini memperluas kategorinya, mulai dari skincare yang
              diformulasikan untuk berbagai jenis kulit hingga produk makeup
              yang membantu setiap individu mengekspresikan kecantikan mereka.
              Dedikasi terhadap keaslian produk, layanan pelanggan yang unggul,
              serta pemahaman mendalam terhadap tren kecantikan menjadikan Salma
              Beauty sebagai pilihan utama bagi mereka yang menginginkan produk
              terbaik di industri kecantikan. Hingga kini, perusahaan terus
              berkembang dengan memperluas jangkauan dan meningkatkan layanan,
              memastikan setiap pelanggan mendapatkan produk berkualitas dengan
              pengalaman belanja yang eksklusif
            </p>
          </div>
        </div>
        {/* //------- */}
        <div className="w-full h-full flex flex-col p-10 text-white text-center">
          <h4 className="flex justify-center text-3xl items-center font-bold text-white mb-6">
            {" "}
            Tim Kami{" "}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center w-full">
            {teams.map((item: ACard, key: number) => (
              <AboutCard
                key={key}
                name={item?.name}
                role={item?.role}
                experience={item?.experience}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded transition duration-300"
              onClick={() => navigate("/teams")}
            >
              Dapatkan Kontak
            </button>
          </div>
        </div>

        <div className="w-full h-full flex flex-col p-10 text-center text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-10">
            <div>
              <Image
                src="/bu.jpg"
                alt="Salmas Beauty"
                width={1920}
                height={1020}
                className="w-full h-190 rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Budaya Perusahaan
              </h2>
              <p className="text-justify text-white mb-10">
                Kami meyakini bahwa budaya perusahaan yang kuat adalah kunci
                keberhasilan jangka panjang. Kami membangun lingkungan kerja
                yang inklusif, kolaboratif, dan inovatif, di mana setiap anggota
                tim merasa dihargai dan memiliki kesempatan untuk berkembang
              </p>
              <div className="flex flex-col gap-8 items-start">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">Visi</h3>
                    <p className="text-white text-justify items-start">
                      Menjadi destinasi utama bagi pecinta kecantikan dengan
                      menyediakan berbagai produk makeup dan skincare dari
                      brand-brand ternama, memastikan kualitas terbaik, dan
                      menghadirkan pengalaman berbelanja yang terpercaya serta
                      menyenangkan
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">Misi</h3>
                    <p className="text-white text-justify items-start">
                      1. Menyediakan Produk Autentik dan Berkualitas
                    </p>
                    <p className="text-white text-justify items-start">
                      2. Memberikan Pengalaman Belanja Terbaik
                    </p>
                    <p className="text-white text-justify items-start">
                      3. Mengikuti Tren Kecantikan Global
                    </p>
                    <p className="text-white text-justify items-start">
                      4. Membantu Pelanggan Menemukan Produk yang Tepat
                    </p>
                    <p className="text-white text-justify items-start">
                      5. Membangun Komunitas Kecantikan
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Nilai Perusahaan
                  </h3>
                  <p className="text-white text-justify items-start">
                    - Integritas: Menjaga kepercayaan pelanggan dengan layanan
                    yang transparan dan jujur.
                  </p>
                  <p className="text-white text-justify items-start">
                    - Inovasi: Terus berinovasi untuk memenuhi kebutuhan gamer
                    masa kini.
                  </p>
                  <p className="text-white text-justify items-start">
                    - Komunitas: Membangun hubungan erat dengan komunitas gamer.
                  </p>
                  <p className="text-white text-justify items-start">
                    - Kualitas: Menyediakan produk berkualitas tinggi untuk
                    meningkatkan pengalaman bermain game.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
