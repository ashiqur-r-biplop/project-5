import React from "react";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet, useNavigation } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import LoadingSpinner from "./Components/Loading-Spinner/LoadingSpinner";
const App = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div>
      <Header></Header>
      <Toaster></Toaster>
      <div className="md:min-h-[calc(100vh-293px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
