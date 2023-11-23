import React from "react";
import Link from "next/link";
import FormReg from "@/4_features/auth-form/FormReg";

export const AuthRegPage: React.FC = () => {
    return (
        <div className={"AuthRegPage"}>
            <div className={"navigation-auth"}>
                <h1>Registration</h1>
                <Link href={'/login'}>Login</Link>
            </div>
            <FormReg/>
        </div>
    )
}