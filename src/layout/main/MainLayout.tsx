import React from "react";
import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

import Navbar from "../UI/Navbar";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default MainLayout;
