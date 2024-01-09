import { useAppDispatch, useAppSelector } from '@/6_shared/hooks/hooks'
import { createUser } from '@/6_shared/store/slices/createUserSlice'

export const useUserAuth = () => {
    const { userData, token } = useAppSelector((state) => state.createUser)
    const isAuth = !!token
    const dispatch = useAppDispatch()
    return {
        isAuth,
        infoUser: userData,
        setUserData: (value: {
            token: string
            email: string | null
            userData: any
        }) => dispatch(createUser(value)),
    }
}
