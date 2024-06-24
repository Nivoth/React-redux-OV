import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllproducts } from "../../redux/action/productAction";

export default function Products() {
  const dispatch = useDispatch();
  const {products} = useSelector((state) => state.productR) ;
  //dispatch action to reducer
  useEffect(() => {
    dispatch(getAllproducts());
  }, []);
return (
    <div>
        {products.map((product,index) => (
            <div key={index}>
                <h1>{product.title}</h1>
            </div>
        ))}
    </div>
)
}

