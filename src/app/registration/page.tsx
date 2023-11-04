import React from "react";
import {Container} from "react-bootstrap";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "@/6_shared/firebase/config";

const RegistrationPage: React.FC = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const handleReg = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                console.log('in system')
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
            })
    }
    return (
        <Container className={"RegistrationPage"}>
            <input type="email" placeholder={"email"} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder={"password"} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleReg}>Registration</button>
        </Container>
    )
}
export default RegistrationPage