import React from "react";
import err from "../assets/404.png";
import DefaultLayout from "../components/DefaultLayout";

const Pagenotfound = () => {
  return (
    <DefaultLayout>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center row">
          <div className=" col-md-6">
            <img src={err} alt="" className="img-fluid" />
          </div>
          <div className=" col-md-6 mt-5">
            <p className="fs-3">
              <span className="text-danger">Opps!</span> Page not found.
            </p>
            <p className="lead">The page you’re looking for doesn’t exist.</p>
            <a href="/" className="btn btn-primary">
              Go Home
            </a>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Pagenotfound;
