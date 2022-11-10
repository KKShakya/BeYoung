import React, { useEffect, useState } from "react";
import { getData } from "../../Global/Axios/Api";
import Products from "./Products";
function Mens() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData("Mens", 1)
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

export default Mens