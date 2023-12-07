import React from "react";
import { Navbar } from "../components/NavigationBar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { HistoryBlog } from "../components/Blog/HistoryBlog";

export const History = () => {
  return (
    <>
      <Navbar />
      <HistoryBlog />
      <Footer />
    </>
  );
};
