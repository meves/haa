import { InputNames } from "../enums";
import { FormType } from "../types";

export const getRequiredFields = (formType: FormType) => {
    switch (formType) {
        case 'registration':
            return { 
                [InputNames.Company] : true,
                [InputNames.Email] : true,
                [InputNames.Password] : true,
                [InputNames.SubmitPassword] : true
            }
        case 'login':
            return { 
                [InputNames.Email] : true,
                [InputNames.Password] : true,
            }
        case 'reset_pwd':
            return { 
                [InputNames.Email] : true
            }
        case 'new_pwd':
            return { 
                [InputNames.Password] : true,
                [InputNames.SubmitPassword] : true
            }
        case 'change_pwd':
            return { 
                [InputNames.OldPassword] : true,
                [InputNames.Password] : true,
                [InputNames.SubmitPassword] : true
            }
        default:
            return { 
                [InputNames.Company] : true,
                [InputNames.Email] : true,
                [InputNames.Password] : true,
                [InputNames.SubmitPassword] : true,
                [InputNames.OldPassword]: true
            }
    }
}