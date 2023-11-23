'use client'
import React from "react";
import {Form} from "react-bootstrap";
import {Field, Formik} from "formik";
import {validationEmail, validationPassword} from "@/6_shared/constants/validationForm";
import {useRouter} from "next/navigation";
import {useAppDispatch} from "@/6_shared/hooks/hooks";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "@/6_shared/firebase/config";
import {createUser} from "@/6_shared/store/slices/createUserSlice";

export const FormReg: React.FC = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()

    const initialValuesForm = {
        email: '',
        password: '',
    }

    const handleSubmitForm = (values: { email: string, password: string }) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
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
                console.log(errorMessage, errorCode)
            })
    }

    return (
        <div className={"FormReg"}>
            <Formik initialValues={initialValuesForm} onSubmit={handleSubmitForm}>
                {
                    ({errors, touched, handleSubmit}) => (
                        <Form className={"form"} onSubmit={handleSubmit}>
                            <div className={"input email"}>
                                <label
                                    className={`label-form${errors.email && touched.email ? ' error-label' : ''}`}
                                >
                                    E-Mail
                                </label>
                                <Field
                                    className={`${errors.email && touched.email ? ' error-email' : ''}`}
                                    type={'email'}
                                    name={'email'}
                                    validate={validationEmail}
                                    placeholder={"E-Mail"}
                                />
                                {
                                    errors.email && touched.email && (
                                        <div className={"error-under-field"}>{errors.email}</div>
                                    )
                                }
                            </div>
                            <div className={"input password"}>
                                <label
                                    className={`label-form${errors.password && touched.password ? ' error-label' : ''}`}
                                >
                                    Password
                                </label>
                                <Field
                                    className={`${errors.password && touched.password ? ' error-email' : ''}`}
                                    type={'password'}
                                    name={'password'}
                                    validate={validationPassword}
                                    placeholder={"Password"}
                                />
                                {
                                    errors.password && touched.password && (
                                        <div className={"error-under-field"}>{errors.password}</div>
                                    )
                                }
                            </div>
                            <button type={"submit"}>
                                Registration
                            </button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}