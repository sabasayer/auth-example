import { ReactElement } from "react";
import AuthLayout from "../../components/auth-layout";
import { NextPageWithLayout } from "../../types/layout";

const Signup:NextPageWithLayout  = () => {
    return <div>Login</div>
}

Signup.getLayout = function getLayout(page: ReactElement) {
    return (
      <AuthLayout>
        {page}
      </AuthLayout>
    )
  }

export default Signup;