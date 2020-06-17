import React, { useEffect, useState } from "react";
import { getProducts } from "../api";
import { aggregateProducts, sortProducts } from "../utils";
import Products from "./Products";
import Search from "./Search";

const initialStatus = {
  loading: true,
  error: false,
};

function App() {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState("");
  const [status, setStatus] = useState(initialStatus);

  const loadData = async () => {
    const products = await getProducts();
    if (products.length) {
      setStatus({ loading: false, error: false });
      setData(sortProducts(aggregateProducts(products)));
    } else {
      setStatus({ loading: false, error: true });
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (status.loading) {
    return <p>Loading...</p>;
  }

  if (status.error) {
    return <p>Something went wrong</p>;
  }

  return (
    <div className="product-list">
      <Search term={term} setTerm={setTerm} />
      <Products term={term} data={data} />
    </div>
  );
}

export default App;
