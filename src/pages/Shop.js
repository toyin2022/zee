import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import Data from "../Data";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();
  const [products, setproducts] = useState(Data.products);
  return (
    <DefaultLayout>
      <div className="container">
        <h3>Welcome to the shop Category</h3>
        <div className="row">
          {products.map((item) => (
            <div className="col-sm ">
              <div
                class="card shadow"
                style={{ width: "14rem", padding: "1rem" }}
              >
                <img
                  src={item.thumbnail}
                  style={{ width: "12rem", height: "20vh" }}
                  class="card-img-top"
                  alt={item.name}
                />
                <div class="card-body border">
                  <h5 class="card-title">{item.title}</h5>
                  <p class="card-text">
                    {item.description.substring(0, 40) + "..."}
                  </p>
                  <div className="container">
                    <div className="row">
                      <div className="col-sm">
                        <button class="mb-3 btn btn-primary">
                          Add to Cart
                        </button>
                        <button
                          onClick={() => navigate(`/shop/${item.id}`)}
                          class="btn btn-primary"
                        >
                          See Product
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Shop;
