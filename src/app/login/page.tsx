'use client'
import React from "react";
import {Container} from "react-bootstrap";
import {auth} from "@/6_shared/firebase/config";
import {signInWithEmailAndPassword} from "firebase/auth";
import {useAppDispatch} from "@/6_shared/hooks/hooks";
import {createUser} from "@/6_shared/store/slices/createUserSlice";
import {useRouter} from "next/navigation";

const LoginPage: React.FC = () => {
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
        <Container className={"LoginPage"}>
            <input type="email" placeholder={"email"} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder={"password"} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
        </Container>
    )
}
export default LoginPage