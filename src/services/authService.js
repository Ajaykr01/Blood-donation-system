import { userLogin, userSignUp } from "../redux/features/auth/authActions";
import store from "../redux/store";

export function handleLogin(e, email, password, role) {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return alert("Please Provide All Fields");
    }
    store.dispatch(userLogin({ email, password, role }));
  } catch (error) {
    console.log(error);
  }
}

export const handleSignUp = (
  e,
  name,
  role,
  email,
  password,
  hospitalName,
  organisationName,
  address,
  phone
) => {
  e.preventDefault();
  try {
    store.dispatch(
      userSignUp({
        name,
        role,
        email,
        password,
        organisationName,
        hospitalName,
        address,
        phone,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
