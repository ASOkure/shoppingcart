import { AllTheRoutes } from "./AllRoutes/AllTheRoutes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <AllTheRoutes />
      <Footer />
    </div>
  );
}

export default App;
