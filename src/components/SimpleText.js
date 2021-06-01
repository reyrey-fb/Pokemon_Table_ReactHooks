import React, { useState, useEffect } from "react";
import { fetchAPI } from "../api/fetchAPI";

const SimpleText = () => {
  const [fullPokemonList, setFullPokemonList] = useState([]);

  useEffect(() => {
    let mounted = true;
    fetchAPI(1, 60, 0) //int page, int limit, int offset
      .then((response) => {
        if (mounted) setFullPokemonList(response.map((res) => res.data));
      });

    return () => (mounted = false);
  }, []);

  const calcAverageWeight = () => {
    //average = 263.8 = total of all pokemon weights (15828) divided by list length (60)
    const average =
      fullPokemonList.length > 0 &&
      fullPokemonList.reduce((total, next) => {
        return total + next.weight;
      }, 0) / fullPokemonList.length;
    return average ? average : "...";
  };

  const calcMostExperienced = () => {
    // max = charizard with 240
    const max =
      fullPokemonList.length > 0 &&
      fullPokemonList.reduce((prev, current) =>
        prev.base_experience > current.base_experience ? prev : current
      );
    return max ? max.name : "...";
  };

  return (
    <>
      <p className="text-white text-nowrap d-flex justify-content-end px-0 mt-3">
        <span className="fw-bold">Pokemon Average Weight:</span>
        <span className="px-2">{calcAverageWeight()}</span>
      </p>
      <p className="text-white text-nowrap d-flex justify-content-end px-0 mt-3">
        <span className="fw-bold">Most Experienced Pokemon:</span>
        <span className="px-2">{calcMostExperienced()}</span>
      </p>
    </>
  );
};

export default SimpleText;
