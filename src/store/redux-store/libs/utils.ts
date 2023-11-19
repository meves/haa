import { AppText, russianText } from "@/store/appText/russianText"
import { AppDispatch } from "../redux-store"
import { Languages } from "./enums"
import { ActionCreatorWithPayload } from "@reduxjs/toolkit"
import { englishText } from "@/store/appText/englishText"


export const getBrowserDefaultLanguage = (): Languages => {
    const currentLanguage = navigator.language.slice(0, 2).toUpperCase()
    return currentLanguage === Languages.RU
        ? Languages.RU
        : currentLanguage === Languages.EN ? Languages.EN
            : Languages.EN
}

export const setCurrentText = (
    defaultLanguage: Languages,
    dispatch: AppDispatch,
    setAppText: ActionCreatorWithPayload<AppText>
) => {
    switch (defaultLanguage) {
        case Languages.RU:
            dispatch(setAppText(russianText))
            break
        case Languages.EN:
            dispatch(setAppText(englishText))
            break
        default:
            dispatch(setAppText(englishText))
    }
} 