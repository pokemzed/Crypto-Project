export const validationEmail = (value: string) => {
    if (!value) {
        return 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
    ) {
        return 'Invalid email address';
    }
}

export const validationPassword = (value: string) => {
    if(!value){
        return 'Required'
    }
}