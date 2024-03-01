//封装高阶组件
//核心逻辑：有无token
import { Navigate } from "react-router-dom";
export function AuthRoute({ children }) {
  const token = getToken();
  if (token) {
    return <>{children}</>;
  } else {
    return <Navigate to="/" replace />;
  }
}
