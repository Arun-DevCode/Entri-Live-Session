import { actions } from "../../stores/actions/user.slice";
import SignUpForm from "../SignUp/Components/SignUpForm";
import { useSelector,useDispatch } from "react-redux";


export default function SignUpPage() {
  // Store
  const state = useSelector((state) => state.User);
  console.log(state)

  // Dispatch 
  const dipatch = useDispatch()


  function updateFields(){
     dipatch(actions.credential({
      name: "Vignesh",
      email: "vignesh@gmail.com",
      password: "vignes@2026",
    }))
  }
  


  return (
    <div>
      {/* Sign Up: Form */}
      <button onClick={updateFields}>Update Name</button>
      <SignUpForm details={state}/>
    </div>
  );
}
