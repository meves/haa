export const comparePasswords = (password: string, re_password: string): boolean => {
    if (Boolean(password) && Boolean(re_password)) {
        return password === re_password
    }return false
}