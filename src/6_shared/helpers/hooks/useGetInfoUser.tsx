import { useAppSelector } from '@/6_shared/helpers/hooks/hooks'

export const useGetInfoUser = () => {
    const userInfo = useAppSelector((state) => state.createUser.userData)
    const userToken = useAppSelector((state) => state.createUser.token)
    const userEmail = useAppSelector((state) => state.createUser.email)
    return {
        userInfo,
        userToken,
        userEmail,
    }
}
