import { Route, Routes } from "react-router-dom";
import NavbarComponent from "./../NavbarComponent/NavbarComponent";
import IndexPage from "./../IndexPage/IndexPage";
import CategoryPage from "./../CategoryPage/CategoryPage";
import ReadingPage from "./../ReadingPage/ReadingPage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AdminPage from "../AdminPage/AdminPage";

export default function DefaultLayout() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //     const user = localStorage.getItem("token")
  //     if (!user) {
  //         navigate("login")
  //     }
  // }, [])
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/publish" element={<CategoryPage />} />
        <Route path="/publish/:category/:id" element={<ReadingPage />} />
        <Route path="/content/:category/:id" element={<ReadingPage />} />
      </Routes>
    </>
  );
}
