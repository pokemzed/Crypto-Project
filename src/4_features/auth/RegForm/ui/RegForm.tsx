'use client'
import React from "react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "@/6_shared/firebase/config";
import Link from "next/link";
import {createUser} from "@/6_shared/store/slices/createUserSlice";
import {useAppDispatch} from "@/6_shared/hooks/hooks";
import {useRouter} from "next/navigation";

export const RegForm: React.FC = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const handleReg = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                dispatch(createUser({
                    email: userCredential.user.email,
                    uId: userCredential.user.uid,
                    token: userCredential.user.refreshToken,
                }))
                localStorage.setItem("token", userCredential.user.refreshToken)
                router.push('/')
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
            })
    }
    return (
        <div className={"RegForm"}>
            <div className={"title"}>
                <h1>Registration</h1>
                <Link href={'/login'}>Login</Link>
            </div>
            <div className={"inputs-container"}>
                <input type="email" placeholder={"email"} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder={"password"} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button onClick={handleReg}>Registration</button>
        </div>
    )
}