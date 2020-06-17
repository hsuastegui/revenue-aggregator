import React from "react";
import PropTypes from "prop-types";
import { formatNumber } from "../utils";
import Row from "./Row";

function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th className="left">Product</th>
          <th className="right">Units sold</th>
          <th className="right">Revenue</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <Row key={item.id} item={item} />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td className="left">Total</td>
          <td className="right">
            {formatNumber(
              data.reduce((acc, curr) => acc + curr.sold, 0),
              0
            )}
          </td>
          <td className="right">
            {formatNumber(data.reduce((acc, curr) => acc + curr.revenue, 0))}
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      sold: PropTypes.number,
      revenue: PropTypes.number,
    })
  ).isRequired,
};

export default Table;
