const colOfCities = {
  IN: ["Chennai", "Mumbai", "Delhi", "Bengaluru", "Hyderabad"],
  USA: ["New York City", "Los Angeles", "Chicago", "Houston", "San Francisco"],
  Australia: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
  Japan: ["Tokyo", "Osaka", "Kyoto", "Yokohama", "Nagoya"],
  UK: ["London", "Manchester", "Birmingham", "Liverpool", "Leeds"],
};

function City({ countryName }) {
  const cities = colOfCities[countryName] || [];
  console.log(cities);
  return (
    <div>
      <h1>Choose Your favorite City : </h1>
      <select name="cities" disabled={cities.length === 0 ? true : false}>
        <option value={""} disabled selected>
          Select City
        </option>
        {cities?.map((city) => (
          <option value={city}>{city}</option>
        ))}
      </select>
    </div>
  );
}

export default City;
