import React from "react";
import PropTypes from "prop-types";
import { formatNumber } from "../utils";

function Row({ item }) {
  return (
    <tr>
      <td className="left">{item.name}</td>
      <td className="right">{formatNumber(item.sold, 0)}</td>
      <td className="right">{formatNumber(item.revenue)}</td>
    </tr>
  );
}

Row.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    sold: PropTypes.number,
    revenue: PropTypes.number,
  }).isRequired,
};

export default Row;
