import { Dispatch, FormEvent, RefObject, SetStateAction, useCallback } from "react";
import { createFormData } from "../utils/createFormData";
import { clearFormInputs } from "../utils/clearFormInputs";

export const useSubmitForm = (
    formInputs: RefObject<HTMLInputElement>[],
    thunkCreator: any, // type
    setIsChecked?: Dispatch<SetStateAction<boolean>>,
    setIsPasswordsMatch?: Dispatch<SetStateAction<boolean>>    
) => {
    
    const resetFormState = useCallback(() => {
        setIsChecked && setIsChecked(false)
        setIsPasswordsMatch && setIsPasswordsMatch(false)
        clearFormInputs(formInputs)
    }, [formInputs, setIsChecked, setIsPasswordsMatch])

    return useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = createFormData(formInputs)        
        
        console.log(formData); // delete

        // sendFormData to server
        
        resetFormState()

    }, [formInputs, resetFormState])
}