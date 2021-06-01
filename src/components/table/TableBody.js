import React, { useContext, useMemo } from "react";
import { Context } from "../../context/Store";

const TableBody = ({ rows = [] }) => {
  const [state] = useContext(Context);

  const sortedData = useMemo(() => {
    let sortableData = [...rows];
    if (state.sortConfig !== null) {
      sortableData.sort((a, b) => {
        if (a[state.sortConfig.key] < b[state.sortConfig.key]) {
          return state.sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[state.sortConfig.key] > b[state.sortConfig.key]) {
          return state.sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [rows, state.sortConfig]);

  return (
    <>
      {sortedData.map((pokemon) => (
        <tr key={pokemon.name}>
          <td headers="name">
            <img
              className=""
              src={pokemon.sprites.front_default}
              alt="pokemon_avatar"
            />
            {pokemon.name}
          </td>
          <td headers="height">{pokemon.height}</td>
          <td headers="weight">{pokemon.weight}</td>
          <td headers="abilities">
            <ul className="list-item">
              {pokemon.abilities.map((ability) => (
                <li key={ability.ability.name}>{ability.ability.name}</li>
              ))}
            </ul>
          </td>
        </tr>
      ))}
    </>
  );
};

export default TableBody;
