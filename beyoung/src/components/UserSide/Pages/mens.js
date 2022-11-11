import React, { useEffect, useState } from "react";
import { getData } from "../../Global/Axios/Api";
import Products from "./Products";
import {CircularProgress} from '@chakra-ui/react'
import Pagination from "../../Global/Pagination";
function Mens() {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getData("Mens", 1)
      .then((res) => {
        console.log(res);
        setLoading(false)
      setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if(loading) {return <CircularProgress thickness='400px'size='10rem'isIndeterminate color='black' mt='10%'/>}
  return (
    <div>
      <Products data={data} />
      <Pagination />
    </div>
  )
}
export default Mens
