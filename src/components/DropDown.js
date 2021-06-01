import React from "react";

const DropDown = ({ data = [], onClick }) => {
  //function to find dropdown filter values
  const typeFilterValues = () => {
    let typeArray = [];
    data.map((pokemon) => {
      return (
        pokemon.types &&
        pokemon.types.map((type) => {
          return typeArray.push(type.type.name);
        })
      );
    });
    let uniqueTypesArray = [...new Set(typeArray)];
    return uniqueTypesArray;
  };

  return (
    <div className="dropdown px-0 mt-3">
      <button
        className="btn btn-dark border dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Filter By Type
      </button>
      <ul
        className="dropdown-menu dropdown-menu-dark py-0"
        aria-labelledby="DropdownMenuLink"
      >
        {typeFilterValues().map((type) => (
          <li key={type}>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => onClick(type)}
            >
              {type}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
