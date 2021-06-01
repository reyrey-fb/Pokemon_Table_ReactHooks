import React from "react";

import { columns } from "./columns";

import HeaderRow from "./HeaderRow";
import TableBody from "./TableBody";

const Table = ({ data = [], filterData = [] }) => {
  return (
    <>
      <table className="table table-striped table-dark">
        <caption>Pokemon List</caption>
        <thead>
          <HeaderRow
            columns={columns}
            data={filterData.length > 0 ? filterData : data}
          />
        </thead>
        <tbody>
          <TableBody rows={filterData.length > 0 ? filterData : data} />
        </tbody>
      </table>
    </>
  );
};

export default Table;
