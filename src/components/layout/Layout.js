import React from "react";
import Header from "./header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col w-full max-w-[1800px] mx-auto h-screen">
      <Header />
      <div className="flex h-full items-center justify-center">{children}</div>
      <Footer />
    </div>
  );
}
