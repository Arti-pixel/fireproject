import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./Components/AppRouter";
import React, { useContext, useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";

const App = observer(() => {
  const { userInfo } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        userInfo.setUser(data);
        userInfo.setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, [userInfo]);

  if (loading) {
    return <Spinner animation={"grow"} />;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
