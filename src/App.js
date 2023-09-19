import { useDynamicContext } from "@dynamic-labs/sdk-react";
import Dashboard from "./components/Dashboard";

function App() {
  const { setShowAuthFlow, user, handleLogOut } = useDynamicContext();

  if (!user) {
    return (
      <div className="flex flex-col gap-8 items-center justify-center">
        <h1>Dynamics App</h1>
        <button
          onClick={() => setShowAuthFlow(true)}
          className="text-lg font-semibold px-4 py-3 bg-blue-700 rounded-lg text-white hover:bg-blue-600"
        >
          Join Dynamics
        </button>
      </div>
    );
  }
  return (
    <>
      <Dashboard handleLogOut={handleLogOut} />
    </>
  );
}

export default App;
