import "./App.css";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";
function RouteLayOut() {
  return (
    <>
      <div className="container">
        <Header></Header>
        <section className="routeContent">
          <Outlet />
        </section>
      </div>
    </>
  );
}

export default RouteLayOut;
