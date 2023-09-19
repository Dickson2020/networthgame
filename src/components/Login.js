import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";

export default function Login({ setShowAuthFlow }) {
  const container = useRef(null);
  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../interface/animations/bitcoin-animation.json"),
    });

    return () => {
      animation.destroy();
    };
  }, []);
  return (
    <>
      <div className="flex flex-col gap-8 items-center justify-center">
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Dynamics App</h1>
        <div className="w-full max-w-[500px]" ref={container}></div>
        <button
          onClick={() => setShowAuthFlow(true)}
          className="text-lg font-semibold px-4 py-3 bg-blue-700 rounded-lg text-white hover:bg-blue-600"
        >
          Connect Wallet
        </button>
      </div>
    </>
  );
}
