import { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
// layout
import MainLayout from "@/layout/main/MainLayout";

// components
import Hero from "@/components/Hero";
import Footer from "@/layout/UI/Footer";
import FeaturedProperties from "@/components/FeaturedProperties";
import FAQ from "@/components/FAQ";

const HomePage: NextPageWithLayout = () => {
  return (
    <section>
      <Hero />
      <FeaturedProperties />
      <FAQ />
    </section>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
