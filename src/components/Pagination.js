import React, { useContext } from "react";
import { Context } from "../context/Store";

const Pagination = ({ data = [], entriesPerPage = 20, entries = 60 }) => {
  const [state, dispatch] = useContext(Context);
  const lastPage = Math.round(entries / entriesPerPage);

  const goToPrevPage = () => {
    let decrement = state.currentPage - 1;
    dispatch({
      type: "SET_CURRENT_PAGE",
      payload: decrement,
    });
  };

  const goToNextPage = () => {
    let increment = state.currentPage + 1;
    dispatch({
      type: "SET_CURRENT_PAGE",
      payload: increment,
    });
  };

  return (
    <>
      <section className="d-flex justify-content-between">
        <span className="text-white" style={{ padding: "6px" }}>
          Page {state.currentPage} of {lastPage}
        </span>
        <span>
          <button
            type="button"
            className="btn btn-dark"
            onClick={goToPrevPage}
            disabled={state.currentPage === 1 ? true : false}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={goToNextPage}
            disabled={state.currentPage === lastPage ? true : false}
          >
            Next
          </button>
        </span>
      </section>
    </>
  );
};

export default Pagination;
