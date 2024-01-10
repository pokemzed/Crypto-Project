'use client'
import React from 'react'
import { Field, Formik } from 'formik'
import { Form } from 'react-bootstrap'
import {
    validationEmail,
    validationPassword,
} from '@/6_shared/helpers/validations/validationForm'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/6_shared/firebase/config'
import { useRouter } from 'next/navigation'
import { useUserAuth } from '@/6_shared/helpers/hooks/useUserAuth'

export const FormLogin: React.FC = () => {
    const router = useRouter()
    const { setUserData } = useUserAuth()
    const [show, setShow] = React.useState<boolean>(false)

    const initialValuesForm = {
        email: '',
        password: '',
    }

    const handleSubmitForm = (
        values: { email: string; password: string },
        onSubmitProps: any
    ) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                userCredential.user.getIdToken().then((token) => {
                    const userInfo = {
                        token,
                        email: userCredential.user.email,
                        userData: userCredential.user,
                    }
                    setUserData(userInfo)
                    router.push('/profile')
                })
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                onSubmitProps.setErrors({
                    email: 'Invalid password or email',
                    password: 'Invalid password or email',
                })
            })
    }

    return (
        <div className={'FormLogin'}>
            <Formik
                initialValues={initialValuesForm}
                onSubmit={handleSubmitForm}
            >
                {({ errors, touched, handleSubmit }) => (
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
                            <div className={'password-input'}>
                                <Field
                                    className={`${
                                        errors.password && touched.password
                                            ? ' error-email'
                                            : ''
                                    }`}
                                    type={`${show ? 'text' : 'password'}`}
                                    name={'password'}
                                    validate={validationPassword}
                                    placeholder={'Password'}
                                />
                                <img
                                    onClick={() => setShow((state) => !state)}
                                    src={`${
                                        show
                                            ? '/icons/dont-show-password.svg'
                                            : '/icons/show-password.svg'
                                    }`}
                                    alt="show-password"
                                />
                            </div>
                            {errors.password && touched.password && (
                                <div className={'error-under-field'}>
                                    {errors.password}
                                </div>
                            )}
                        </div>
                        <button type={'submit'}>Login</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
