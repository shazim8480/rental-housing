import { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import MainLayout from "@/layout/main/MainLayout";
import Hero from "@/components/Hero";
import Navbar from "@/layout/UI/Navbar";

const HomePage: NextPageWithLayout = () => {
  return (
    <section>
      <Hero />
    </section>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
