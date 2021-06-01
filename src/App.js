import React, { useState, useEffect, useCallback, useContext } from "react";

import { fetchAPI } from "./api/fetchAPI";

import { Context } from "./context/Store";
import Table from "./components/table/Table";
import DropDown from "./components/DropDown";
import Pagination from "./components/Pagination";
import SimpleText from "./components/SimpleText";

import "./App.css";

const App = () => {
  const [state, dispatch] = useContext(Context);
  const [filterData, setFilterData] = useState([]);

  const fetchPokemon = useCallback(() => {
    dispatch({ type: "SET_ISLOADING", payload: true });
    fetchAPI(state.currentPage)
      .then((response) => {
        dispatch({
          type: "SET_POKEMONLIST",
          payload: response.map((res) => res.data),
        });
        dispatch({ type: "SET_ISLOADING", payload: false });
      })
      .catch((error) => {
        dispatch({ type: "SET_ERROR", payload: error });
        dispatch({ type: "SET_ISLOADING", payload: false });
      });
  }, [state.currentPage, dispatch]);

  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]);

  //functon to fetch new pokemon data filtered by dropdown value
  const handleClick = (type) => {
    const filteredArray = state.pokemonList.filter(
      (pokemon) =>
        pokemon.types && pokemon.types.some((t) => t.type.name === type)
    );
    setFilterData(filteredArray);
  };

  if (state.error) return <h1>{state.error}</h1>;
  return (
    <div className="bg-dark">
      {state.isLoading ? (
        <div className="text-white d-flex justify-content-center mt-3 fw-bold">
          Loading Data Table...
        </div>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col px-0 d-flex align-items-center">
              <DropDown data={state.pokemonList} onClick={handleClick} />
            </div>
            <div className="col">
              <SimpleText />
            </div>
          </div>
          <div className="row mt-4">
            <Table data={state.pokemonList} filterData={filterData} />
          </div>
          <div className="row">
            <Pagination entries={60} entriesPerPage={20} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
