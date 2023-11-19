import { useEffect, useState } from "react"
import { checkRequiredFields } from "../utils/checkRequiredFields"
import { FormType, RequiredFields } from "../types"
import { getRequiredFields } from "../utils/getRequiredFields"

export const useControlFormState = (formType: FormType, isPasswordMatch?: boolean) => {

    const [requiredFields, setRequiredFields] = useState<RequiredFields>(getRequiredFields(formType))
    
    const [formError, setFormError] = useState('')

    const [isDisabled, setIsDisabled] = useState(true)

    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        switch (formType) {
            case 'registration':
                setIsDisabled(Boolean(formError) || !isChecked || !isPasswordMatch || checkRequiredFields(requiredFields))
                break
            case 'login':
                setIsDisabled(Boolean(formError) || checkRequiredFields(requiredFields))
                break
            case 'reset_pwd':
                setIsDisabled(Boolean(formError) || checkRequiredFields(requiredFields))
                break
            case 'new_pwd':
                setIsDisabled(Boolean(formError) || !isPasswordMatch || checkRequiredFields(requiredFields))
                break
            case 'change_pwd':
                setIsDisabled(Boolean(formError) || !isPasswordMatch || checkRequiredFields(requiredFields))
                break
        }
        
    }, [formError, isChecked, isPasswordMatch, requiredFields, formType]) 

    return { setFormError, isDisabled, isChecked, setIsChecked, setRequiredFields }
}