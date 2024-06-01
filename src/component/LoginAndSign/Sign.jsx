import { SignCom } from "./LoginSigncom/SignCom";
import { AuthLayout } from "./AuthLayout";
import React from 'react'
import './Signup.css'

export const Signup = () => {
  return (
    <>
<AuthLayout title="SignUp">
<SignCom type="signup"/>



</AuthLayout>
    </>
  )
}
