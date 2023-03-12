import React, { useEffect } from "react";
// import Typewriter from "typewriter-effect";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import DefaultLayout from "../components/DefaultLayout";
import left from "../assets/left.jpg";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <DefaultLayout>
      <div className="container">
        <h3
          style={{
            fontSize: "2rem",
            letterSpacing: "3px",
            marginBottom: "40px",
            textAlign: "center",
            boxShadow: "0px 3px solid #000",
          }}
        >
          Welcome to Azoni Collections
        </h3>
        <div className="row">
          <div className="col-sm">
            <div className="right">
              <h5>The best store in town</h5>

              <h3 style={{ marginBottom: "4vh" }}>
                <span style={{ color: "red" }}>Patronize</span> us <br />
                <span style={{ color: "darkblue" }}>Today </span> to enjoy{" "}
                <br />
                <Typewriter
                  words={[" 10% off?", " 20% off"]}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h3>

              <button className="btn btn-primary mb-4">Shop now</button>
            </div>
          </div>
          <div className="col-sm left">
            <div className="img-con">
              <img
                style={{ width: "38vw", height: "38vh", borderRadius: " 100%" }}
                src={left}
                alt="fgsf"
              />
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </DefaultLayout>
  );
};

export default Home;
