'use client'
import React from "react";
import {useAppDispatch} from "@/6_shared/hooks/hooks";
import {useRouter} from "next/navigation";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "@/6_shared/firebase/config";
import {createUser} from "@/6_shared/store/slices/createUserSlice";
import {Container} from "react-bootstrap";

export const LoginForm: React.FC = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
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
        <div className={"LoginForm"}>
            <h1>Login</h1>
            <div className={"inputs-container"}>
                <input type="email" placeholder={"email"} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder={"password"} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}