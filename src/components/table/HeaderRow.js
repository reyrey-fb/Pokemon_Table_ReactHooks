import React, { useContext } from "react";
import { Context } from "../../context/Store";

const HeaderRow = ({ columns = [], data = [] }) => {
  const [state, dispatch] = useContext(Context);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      state.sortConfig &&
      state.sortConfig.key === key &&
      state.sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    dispatch({
      type: "SET_SORT_CONFIG",
      payload: { key: key, direction: direction },
    });
    console.log(state.sortConfig);
  };

  return (
    <tr>
      {columns.map((col) => (
        <th key={col.key} id={col.key} scope="col">
          <div className="" onClick={() => requestSort(col.key)}>
            {col.title}
            <span className="position-relative">
              {state.sortConfig === null ||
              state.sortConfig.direction === "ascending" ? (
                <i className="material-icons sort-icon">arrow_downward</i>
              ) : (
                <i className="material-icons sort-icon">arrow_upward</i>
              )}
            </span>
          </div>
        </th>
      ))}
    </tr>
  );
};

export default HeaderRow;
