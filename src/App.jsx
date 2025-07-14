import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Astronomica from "./components/Astronomica";
import Contact from "./components/Contact";
// import Calendar from "./components/Calendar";
import AstroGallery from "./components/AstroGallery";
import Members from "./components/Members";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="astronomica" element={<Astronomica />} />
          {/* <Route path="calendar" element={<Calendar />} /> */}
          <Route path="contact" element={<Contact />} />
          <Route path="astrogallery" element={<AstroGallery />} />
          <Route path="members" element={<Members />} />
          <Route path="articles" element={<Articles />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
