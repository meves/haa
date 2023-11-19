'use client'

import { useAppSelector } from "@/store/redux-store/libs/hooks"
import { selectIsAuth } from "@/store/redux-store/slices/authSlice"
import { LinkButton } from "../../common/UIKIT/Buttons/LinkButton/LinkButton"
import { russianText } from "@/store/appText/russianText"

const { lk, login } = russianText.header

export const AuthBlock = ({
    className
} : {
    className?: string
}) => {
    const isAuth = useAppSelector(selectIsAuth)

    return (
        <>
        { isAuth
            ? <LinkButton href="/lk" text={lk} className={className} />
            : <LinkButton href="/login" text={login} className={className} />
        }
        </>
    )
}