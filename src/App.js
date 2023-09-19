import { useDynamicContext } from "@dynamic-labs/sdk-react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {
  const { setShowAuthFlow, user, handleLogOut } = useDynamicContext();

  if (!user) {
    return (
      <>
        <Login setShowAuthFlow={setShowAuthFlow} />
      </>
    );
  }
  return (
    <>
      <Dashboard handleLogOut={handleLogOut} />
    </>
  );
}

export default App;
