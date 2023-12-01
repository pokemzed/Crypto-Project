import {useAppDispatch, useAppSelector} from "@/6_shared/hooks/hooks";
import {getUnixTime} from "@/6_shared/hooks/getUnixTime";
import {removeUser} from "@/6_shared/store/slices/createUserSlice";

export const IsAuth = () => {
    const dispatch = useAppDispatch()
    const {email, token} = useAppSelector(state => state.createUser)

    if(token){
        const {exp, iat} = JSON.parse(window.atob(token.split('.')[1]))
        //Проверка сколько осталось жить токену
        const tokenLife = exp - getUnixTime()
        //Делаем запас во времени, чтобы не было невалидного токена
        const minTimeForUpdate = (exp - iat) * 0.25
        //Делаем проверку на валидность жизни токена
        if(tokenLife < minTimeForUpdate){
            //Удаляем пользователя, если токен умер
            dispatch(removeUser())
        }
    }

    return {
        isAuth: !!token,
        email,
        token
    }
}