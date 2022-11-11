import React, { useEffect, useState } from "react";
import { getData } from "../../Global/Axios/Api";
import Products from "./Products";
import {Center, CircularProgress } from "@chakra-ui/react";

function Womens() {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData("Womens", 1)
      .then((res) => {
        console.log(res);
        setLoading(false)
      setData(res.data);
      })
      .catch((err) => {console.log(err); setLoading(true)});
  }, []);

  if(loading) {return <CircularProgress thickness='400px'size='10rem'isIndeterminate color='black' mt='10%'/>}
  console.log(data);
  return <div>
    <Products data={data} />
    <Center>1 2 3 4 5 6 5 7 7 </Center>
  </div>;
}

export default Womens;
