import { useState } from "react";
import City from "./City";

function Country() {
  const [country, setCountry] = useState();

  const handleChange = (e) => {
    const countryName = e.target.value;
    setCountry(countryName);
  };
  return (
    <div>
      <h1>Choose You favorite Country :{country} </h1>
      <select onChange={handleChange}>
        <option value={""} disabled selected>
          Select Country
        </option>
        <option value="IN">India</option>
        <option value="USA">United States</option>
        <option value="Australia">Australia</option>
        <option value="Japan">Japan</option>
        <option value="UK">United Kingdom</option>
      </select>

      <City countryName={country} />
    </div>
  );
}

export default Country;
