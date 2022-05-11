import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MessagePage from "./pages/MessagePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/message" element={<MessagePage />}></Route>
    </Routes>
  );
}

export default App;
