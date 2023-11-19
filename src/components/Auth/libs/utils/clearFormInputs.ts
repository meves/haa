import { RefObject } from "react"

export const clearFormInputs = (inputRefs: RefObject<HTMLInputElement>[]) => {
    inputRefs.forEach(ref => {
        if (ref.current) {
            ref.current.value = ''
        }
    })
}