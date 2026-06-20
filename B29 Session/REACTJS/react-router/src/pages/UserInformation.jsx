import { useLoaderData, useParams } from "react-router";

export default function UserInformation() {
  const params = useParams();
  console.log(params);

  const user = useLoaderData(params)
  return <h1>Welcome to User Information</h1>;
}
