import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Home from "../pages/HomePage/Home";
import Details from "../pages/Details/Details";
import Profile from "../pages/Profile/Profile";
import UpProfile from "../pages/Profile/UpProfile";
import UploadRumah from "../pages/Upload/UploadRumah";
import UpdateRumah from "../pages/Upload/UpdateRumah";
import Ulasan from "../pages/Upload/Ulasan";
import HistoryReservasi from "../pages/Upload/HistoryReservasi";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/room/:homestay_id" element={<Details />} />
        <Route path="/profile/:id_profile" element={<Profile />} />
        <Route path="/updateprofile/:id_profile" element={<UpProfile />} />
        <Route path="/addrooms" element={<UploadRumah />} />
        <Route path="/updaterooms/:id_rooms" element={<UpdateRumah />} />
        <Route path="/review" element={<Ulasan />} />
        <Route path="/reservasi" element={<HistoryReservasi />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
