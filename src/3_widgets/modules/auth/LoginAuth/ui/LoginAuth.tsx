import React from 'react'
import NavigationAuth from '@/4_features/modules/auth/NavigatIonAuth'
import FormLogin from '@/4_features/modules/auth/FormLogin'

export const LoginAuth: React.FC = () => {
    return (
        <div className={'LoginAuth'}>
            <NavigationAuth
                title={'Login'}
                titleLink={'Registration'}
                link={'registration'}
            />
            <FormLogin />
        </div>
    )
}
