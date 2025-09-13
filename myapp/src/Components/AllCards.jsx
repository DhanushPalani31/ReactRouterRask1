import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function AllCards({ cartDetails, setCartDetails }) {
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProductDetails(response.data);
        console.log("products:", response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full max-w-full p-4 justify-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {productDetails.map((productData) => (
        <Card
          key={productData.id}
          productData={productData}
          image={productData.image}
          title={productData.title}
          price={productData.price}
          cartDetails={cartDetails}
          setCartDetails={setCartDetails}
        />
      ))}
    </div>
  );
}
