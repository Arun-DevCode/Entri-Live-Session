import React from "react";

export default function compB(props) {
  const stateAndCity = [
    {
      TamilNadu: ["Chennai", "Coimbatore"],
    },
    {
      Telugu: ["Tirupathi", "Hydrabad"],
    },
    {
      Kerala: ["Kochi", "Palakaddu"],
    },
  ];
  console.log(props.state);
  return (
    <div>
      <p>City : </p>
      <select name="City">
        {stateAndCity.map((state) => {
          console.log(state.Telugu);
          if (state.TamilNadu === props.state) {
            console.log("Option Loaded");
            return <option value="TN">Tamil Nadu</option>;
          }
          if (state.Telugu === props.state) {
            console.log("Option Loaded");
            return <option value="TL">Telugu</option>;
          }
          if (state.Kerala === props.state) {
            return <option value="KL">Keral</option>;
          }
        })}
      </select>
    </div>
  );
}
