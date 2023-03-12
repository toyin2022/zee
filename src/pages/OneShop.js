import React from "react";
import { Link, useParams } from "react-router-dom";

import DefaultLayout from "../components/DefaultLayout";
import Data from "../Data";

const OneShop = () => {
  const { id } = useParams();
  const oneData = Data.products.find((car) => car.id === Number(id));
  console.log(oneData);
  return (
    <DefaultLayout>
      <div className="con">
        <div className="card shadow p-4">
          <div className="card-header text-center">
            Remaining in stock: {oneData.stock}
          </div>

          <img
            className="card-img-top shadow mt-3 m-auto"
            style={{ width: "40vw", height: "40vh" }}
            src={oneData.images}
            alt={oneData.title}
          />
          <p className=" card-header border p-2 mt-3">{oneData.brand}</p>

          <div className="card-body">
            <div className="container p-4">
              <h5 className="card-title"> {oneData.title} </h5>
              <p className="card-text">
                <span style={{ fontSize: "1.1rem", fontWeight: "700" }}>
                  Description:{" "}
                </span>
                {oneData.description} Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Hic nihil incidunt cum laborum, atque
                excepturi deserunt. Est natus placeat iusto.
              </p>
            </div>

            <fieldset className="container">
              <legend>Price: ${oneData.price}</legend>
              <p>Discount: {oneData.discountPercentage}%</p>
            </fieldset>

            <div className="btn btn-primary">Add to cart</div>
          </div>
          <p className="card-footer    text-center">
            Rating per 5 star <br /> <br /> {oneData.rating}
          </p>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default OneShop;
