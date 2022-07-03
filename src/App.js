import { BrowserRouter, Routes, Route } from "react-router-dom";

import Template from "./components/Template";
import Dashboard from "./pages/Dashboard";
import MakePayment from "./pages/MakePayment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route path="" element={<Dashboard />} />
          <Route path="/transfer" element={<MakePayment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
