export type RequiredFields = {
    company?: boolean;
    email?: boolean;
    password?: boolean;
    re_password?: boolean;
    old_password?: boolean
}

export type FormType = 'registration' | 'login' | 'reset_pwd' | 'new_pwd' | 'change_pwd' 