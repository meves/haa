import { createRef } from "react"

export const useCreateInputRefs = () => {
    return {
        firstNameRef: createRef<HTMLInputElement>(),
        lastNameRef: createRef<HTMLInputElement>(),
        emailRef: createRef<HTMLInputElement>(),
        companyRef: createRef<HTMLInputElement>(),
        passwordRef: createRef<HTMLInputElement>(),
        rePasswordRef: createRef<HTMLInputElement>(),
        oldPasswordRef: createRef<HTMLInputElement>()
    }
}