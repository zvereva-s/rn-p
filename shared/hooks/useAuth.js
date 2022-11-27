import { useSelector } from "react-redux";

import { isLogin } from "../../redux/auth/auth-selectors";

export default function useAuth() {
  return useSelector(isLogin);
}
