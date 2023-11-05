import {useAppSelector} from "@/6_shared/hooks/hooks";

export const IsAuth = () => {
    const {email, uId, token} = useAppSelector(state => state.createUser)
    return {
        isAuth: !!token,
        email,
        uId,
        token
    }
}