import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";

export default function Dashboard({ user, handleLogOut }) {
  const container = useRef(null);
  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("../interface/animations/checkmark.json"),
    });

    return () => {
      animation.destroy();
    };
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-full w-full m-auto">
      <h1 className="mt-2 text-3xl font-bold tracking-tight">Welcome !!!</h1>
      <p className=" text-[.8em] md:text-[1.2em] px-2 mt-3">
        {user.verifiedCredentials[0].address || user.email}
      </p>
      <div ref={container} className="w-full max-w-[300px]"></div>
      <div>
        <button
          className="text-lg font-semibold px-5 py-2 bg-red-700 rounded-lg text-white hover:bg-red-600"
          onClick={handleLogOut}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
