import { useCallback, useEffect, useState } from "react"
import { comparePasswords } from "../utils/comparePasswords"

export const usePasswordsMatch = () => {
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [isPasswordMatch, setIsPasswordsMatch] = useState(false)

    useEffect(() => {
        setIsPasswordsMatch(comparePasswords(password, rePassword))
    }, [password, rePassword])

    return {setPassword, setRePassword, isPasswordMatch, setIsPasswordsMatch}
}