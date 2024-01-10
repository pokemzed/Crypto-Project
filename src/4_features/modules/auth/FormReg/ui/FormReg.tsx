'use client'
import React from 'react'
import { Form } from 'react-bootstrap'
import { Field, Formik } from 'formik'
import {
    passwordRepeatValidation,
    validationEmail,
    validationPassword,
} from '@/6_shared/helpers/validations/validationForm'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/6_shared/helpers/hooks/hooks'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import { createUser } from '@/6_shared/store/slices/createUserSlice'
import { auth } from '@/6_shared/firebase/config'

export const FormReg: React.FC = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()

    const initialValuesForm = {
        email: '',
        password: '',
        repeatPassword: '',
    }

    const handleSubmitForm = (values: { email: string; password: string }) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                userCredential.user
                    .getIdToken()
                    .then((token) => {
                        dispatch(
                            createUser({
                                email: userCredential.user.email,
                                token: token,
                            })
                        )
                        router.push('/')
                    })
                    .catch((err) => console.error(err))
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.log(errorMessage, errorCode)
            })
    }

    return (
        <div className={'FormReg'}>
            <Formik
                initialValues={initialValuesForm}
                onSubmit={handleSubmitForm}
            >
                {({ errors, touched, handleSubmit, values }) => (
                    <Form className={'form'} onSubmit={handleSubmit}>
                        <div className={'input email'}>
                            <label
                                className={`label-form${
                                    errors.email && touched.email
                                        ? ' error-label'
                                        : ''
                                }`}
                            >
                                E-Mail
                            </label>
                            <Field
                                className={`${
                                    errors.email && touched.email
                                        ? ' error-email'
                                        : ''
                                }`}
                                type={'email'}
                                name={'email'}
                                validate={validationEmail}
                                placeholder={'E-Mail'}
                            />
                            {errors.email && touched.email && (
                                <div className={'error-under-field'}>
                                    {errors.email}
                                </div>
                            )}
                        </div>
                        <div className={'input password'}>
                            <label
                                className={`label-form${
                                    errors.password && touched.password
                                        ? ' error-label'
                                        : ''
                                }`}
                            >
                                Password
                            </label>
                            <Field
                                className={`${
                                    errors.password && touched.password
                                        ? ' error-email'
                                        : ''
                                }`}
                                type={'password'}
                                name={'password'}
                                validate={validationPassword}
                                placeholder={'Password'}
                            />
                            {errors.password && touched.password && (
                                <div className={'error-under-field'}>
                                    {errors.password}
                                </div>
                            )}
                        </div>
                        <div className={'input password'}>
                            <label
                                className={`label-form${
                                    errors.password && touched.password
                                        ? ' error-label'
                                        : ''
                                }`}
                            >
                                Repeat password
                            </label>
                            <Field
                                className={`${
                                    errors.repeatPassword &&
                                    touched.repeatPassword
                                        ? ' error-email'
                                        : ''
                                }`}
                                type={'password'}
                                name={'repeatPassword'}
                                validate={(value: string) =>
                                    passwordRepeatValidation(
                                        value,
                                        values.password
                                    )
                                }
                                placeholder={'Repeat password'}
                            />
                            {errors.repeatPassword &&
                                touched.repeatPassword && (
                                    <div className={'error-under-field'}>
                                        {errors.repeatPassword}
                                    </div>
                                )}
                        </div>
                        <button type={'submit'}>Registration</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
