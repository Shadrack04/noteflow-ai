import Button from "./components/Button";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="">
      <Header setOpenModal={setOpenModal} />
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <Main setOpenModal={setOpenModal} />
      <Footer />
    </div>
  );
}

export default App;
