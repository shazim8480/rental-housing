import React from "react";
import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

const MainLayout: React.FC<{
  children: React.ReactNode;
  isSearchBar?: React.ReactNode;
}> = ({ children, isSearchBar }) => {
  return (
    <main>
      <Navbar isSearchBar={isSearchBar} />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
