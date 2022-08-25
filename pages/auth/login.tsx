import { ReactElement } from "react";
import AuthLayout from "../../components/auth-layout";
import { NextPageWithLayout } from "../../types/layout";

const Login:NextPageWithLayout  = () => {
    return <div>Login</div>
}

Login.getLayout = function getLayout(page: ReactElement) {
    return (
      <AuthLayout>
        {page}
      </AuthLayout>
    )
  }

export default Login;