import React, { useEffect, useState } from "react";
import useDataStore from "./store/data_store";
import { toast } from "react-toastify";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoadingScreen from "./screens/LoadingScreen";
import Header from "./screens/component/HomeScreenComponent/Header";
import ProductViewScreen from "./screens/ProductViewScreen";

const App = () => {
  const data = useDataStore((state) => state.data);
  const setData = useDataStore((state) => state.setData);
  const [isDataAvail, setisDataAvail] = useState("");
  useEffect(() => {
    initialRun()
      .then((d) => {
        setData(d);
        setisDataAvail(d);
        console.log(d);
      })
      .catch((e) => {
        toast.error(e.message || "Network Error");
      });
  }, []);

  const initialRun = async () => {
    try {
      const data = await axios.get(
        "https://fakestoreapi.com/products?limit=20"
      );
      return data.data;
    } catch (error) {
      return error;
    }
  };

  return isDataAvail == "" ? (
    <LoadingScreen />
  ) : (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<HomeScreen />} path="/" />
        <Route element={<ProductViewScreen />} path="/product" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
