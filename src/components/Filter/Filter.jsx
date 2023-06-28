import { useDispatch, useSelector } from "react-redux";
import { selectedFilter } from "../../redux/selectors";
import { filterOptions } from "./filteredOptions";
import React from "react";
import Select from "react-select";
import { changeFilter } from "../../redux/filterReducer";
import "./Filter.css";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectedFilter);

  const filteredValue = filterOptions.find((el) => el.value === filter);

  return (
    <Select
      defaultValue={filterOptions}
      classNamePrefix="filter"
      options={filterOptions}
      value={filteredValue}
      onChange={(e) => dispatch(changeFilter(e.value))}
    />
  );
};
