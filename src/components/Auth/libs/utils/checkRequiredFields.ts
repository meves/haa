import { RequiredFields } from "../types";

export const checkRequiredFields = (requiredFields: RequiredFields) => {
    return Object.values(requiredFields).some(value => value)
}