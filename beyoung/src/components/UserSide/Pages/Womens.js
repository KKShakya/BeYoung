import React, { useEffect, useState } from "react";
import { getData } from "../../Global/Axios/Api";
import Products from "./Products";

function Womens() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData("Womens", 1)
      .then((res) => {
        console.log(res);
      setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return <div>
    <Products data={data} />
  </div>;
}

export default Womens;
