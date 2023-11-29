// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import { useAppContext } from "./Context";

function App() {
  const { loading } = useAppContext();

  if (loading) {
    return (
      <main style={{ height: "100vh", display: "grid", placeItems: "center" }}>
        <div className="loading"></div>
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
