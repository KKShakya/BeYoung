import React, { useEffect, useState } from "react";
import { getData } from "../../Global/Axios/Api";
import Products from "./Products";

export default function Kids() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData("Child", 1)
      .then((res) => {
        console.log(res);
      setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Products data={data} />
    </div>
  )
}
