import isEmail from 'validator/es/lib/isEmail'
import isLength from 'validator/es/lib/isLength'


export const validateValue = (type: 'text' | 'email' | 'password', value: string) => {    
    switch (type) {
        case 'text':
            return validateName(value)
        case 'email':
            return validateEmail(value)
        case 'password':
            return validatePassowrd(value)
        default:
            return false
    }
}

export const validateEmail = (email: string): boolean => {
    return isLength(email, {
        max: 254
    }) &&
    isEmail(email, {
        allow_utf8_local_part: false,
        ignore_max_length: true,
        allow_ip_domain: false,
        domain_specific_validation: true,
        blacklisted_chars: " \n",
        host_blacklist: [" ", "\n"]
    })
}

const REGEXP_NAME = /^[A-Za-zА-яа-я -]{1,50}$/

export const validateName = (name: string): boolean => {
    return REGEXP_NAME.test(name)
}

export const REGEXP_PASSWORD = /^[0-9a-zA-Z!@#$%^&*/|(){}:;-]{6,50}$/

export const validatePassowrd = (password: string): boolean => {
    return REGEXP_PASSWORD.test(password.toLowerCase())
}

export const REGEXP_COMMENT = /^[0-9a-zA-Zа-яА-ЯЁё,./()*+=_!"№;%:? \n<>-]{1,600}$/

export const validateComment = (comment: string) => {
    return REGEXP_COMMENT.test(comment)
}