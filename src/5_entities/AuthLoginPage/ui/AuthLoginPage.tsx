import React from "react";
import Link from "next/link";
import FormLogin from "@/4_features/auth-form/FormLogin";

export const AuthLoginPage: React.FC = () => {
    return (
        <div className={"AuthLoginPage"}>
            <div className={"navigation-auth"}>
                <h1>Login</h1>
                <Link href={'/registration'}>Registration</Link>
            </div>
            <FormLogin/>
        </div>
    )
}