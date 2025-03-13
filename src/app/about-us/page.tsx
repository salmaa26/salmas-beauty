import React from "react";
import AboutUs from "@/components/molecules/about.us.module";
import Navbar from "@/components/atomics/navbar.module";
import Footer from "@/components/atomics/footer.module";

export default function AboutUsPage() {
  return (
    <>
    <Navbar/>
        <AboutUs />
    <Footer/>
    </>
  );
}