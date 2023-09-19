import React from "react";
import Header from "./header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col w-full max-w-[1800px] mx-auto min-h-screen">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
