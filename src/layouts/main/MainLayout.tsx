import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Navbar from "../UI/Navbar";

const MainLayout = () => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Navbar />
      <h1>This is main layout</h1>
    </main>
  );
};

export default MainLayout;
