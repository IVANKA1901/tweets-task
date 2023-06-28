import { useDispatch, useSelector } from "react-redux";
import { selectedFilter } from "../../redux/selectors";
import { filterOptions } from "./filteredOptions";
import React from "react";
import Select from "react-select";
import { changeFilter } from "../../redux/filterReducer";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectedFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.value));
  };

  const filteredValue = filterOptions.find((el) => el.value === filter);

  return (
    <Select
      defaultValue={filterOptions[0]}
      classNamePrefix="filter"
      options={filterOptions}
      value={filteredValue}
      onChange={handleChange()}
    />
  );
};
