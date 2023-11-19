import { RefObject } from "react";

type FormData = {
    first_name?: string
    last_name?: string
    company?: string
    email?: string
    password?: string
    re_password?: string
    old_password?: string
}

type Keys = keyof FormData

export const createFormData = (inputRefs: RefObject<HTMLInputElement>[]) => {
    const formData : {[index: string] : string}  = {}
    
    inputRefs.forEach((inputRef: RefObject<HTMLInputElement>) => {
        if (inputRef.current) {
            const name = inputRef.current.name
            const value = inputRef.current.value
            formData[name] = value
        }
    })
    
    return formData
}