import React, { useContext, useState } from "react";
import AppContext from "../../HelperContext/Context";
import "./selectInputs.css";

const SelectInputs = ({ label }) => {
  const [value, setValue] = useState("");
  let {
    userFeelObj,
    userValueData,
    setFeeling,
    feeling,
    feelingValue,
    setFeelingValue,
  } = useContext(AppContext);

  const ChartInputData = [
    "Mood",
    "Energy",
    "Depression",
    "Irritability",
    "Motivation",
    "Stress",
    "Appetite",
    "Concentration",
  ];

  const handleChange = (e) => {
    console.log("UFO user", userFeelObj);

    if (e.target.value === "Mood") {
      setFeelingValue(userFeelObj.mood);
    } else if (e.target.value === "Energy") {
      setFeelingValue(userFeelObj.energy);
    } else if (e.target.value === "Depression") {
      setFeelingValue(userFeelObj.depression);
    } else if (e.target.value === "Irritability") {
      setFeelingValue(userFeelObj.irritability);
    } else if (e.target.value === "Motivation") {
      setFeelingValue(userFeelObj.motivation);
    } else if (e.target.value === "Stress") {
      setFeelingValue(userFeelObj.stress);
    } else if (e.target.value === "Appetite") {
      setFeelingValue(userFeelObj.appetatite);
    } else if (e.target.value === "Concentration") {
      setFeelingValue(userFeelObj.concentration);
    } else {
      console.log("error");
    }

    console.log("etv", e.target.value);
    setValue(e.target.value);
    //   setFeelingValue(e.target.value);
    setFeeling(e.target.value);
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
