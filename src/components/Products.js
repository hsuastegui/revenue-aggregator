import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Table from "./Table";

function Products({ term, data }) {
  const [products, setProducts] = useState(data);
  useEffect(() => {
    if (term === "") {
      setProducts(data);
    }
    setProducts(
      data.filter(({ name }) => name.toLowerCase().includes(term.toLowerCase()))
    );
  }, [data, term]);
  return <Table data={products} />;
}

Products.propTypes = {
  term: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      sold: PropTypes.number,
      revenue: PropTypes.number,
    })
  ).isRequired,
};

export default Products;
