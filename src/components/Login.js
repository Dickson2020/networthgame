import { useLottie } from "../helpers/useLottie";
import animationData from "../interface/animations/bitcoin-animation.json";

export default function Login({ setShowAuthFlow }) {
  const loginContainer = useLottie(animationData, true);
  return (
    <>
      <div className="flex flex-col gap-8 items-center justify-center">
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Dynamic App</h1>
        <div className="w-full max-w-[500px]" ref={loginContainer}></div>
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
