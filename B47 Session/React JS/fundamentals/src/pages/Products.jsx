import { useSearchParams } from "react-router";

function Products() {
  const [params, setParams] = useSearchParams();

  console.log(params.get("mobile"));
  console.log(params.get("brand"));

  function filter() {
    setParams({
      mobile: "nokia",
      brand: "nokia",
    });
  }
  return (
    <div>
      <h1>Products</h1>
      <button onClick={filter}>Click for filter</button>
    </div>
  );
}

export default Products;
