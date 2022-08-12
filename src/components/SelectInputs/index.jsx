import React, { useContext, useState } from "react";
import AppContext from "../../HelperContext/Context";
import "./selectInputs.css";

const SelectInputs = ({ label }) => {
  const [value, setValue] = useState("");
  const { setFeeling } = useContext();

  const ChartInputData = [
    "Mood",
    "Energy",
    "Depression",
    "irritability",
    "Motivation",
    "Stress",
    "Appetite",
    "Concentration",
  ];

  const handleChange = (e) => {
    setValue(e.target.value);
    setFeeling(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <label htmlFor={label}></label>
      <select
        required
        className="select"
        label={label}
        value={value}
        id={label}
        onChange={handleChange}
      >
        {ChartInputData &&
          ChartInputData.map((list, index) => (
            <option value={list} key={index}>
              {list}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectInputs;
