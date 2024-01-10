import React from 'react'
import NavigationAuth from '@/4_features/modules/auth/NavigatIonAuth'
import FormReg from '@/4_features/modules/auth/FormReg'

export const RegistrationAuth: React.FC = () => {
    return (
        <div className={'RegistrationAuth'}>
            <NavigationAuth
                title={'Registration'}
                titleLink={'Login'}
                link={'login'}
            />
            <FormReg />
        </div>
    )
}
