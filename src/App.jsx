import { Helmet } from "react-helmet-async";
import Button from "./components/Button";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { useState } from "react";
import SetDarkMode from "./components/SetDarkMode";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Helmet>
        <title>NoteFlow AI App</title>
        <meta
          name="description"
          content="AI-Powered Notes. Organize and Summarize in Seconds
Let AI organize & summarize your notes,
saving you time and boosting productivity"
        />
      </Helmet>
      <Header setOpenModal={setOpenModal} />
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <Main setOpenModal={setOpenModal} />
      <SetDarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
      <Footer />
    </div>
  );
}

export default App;
