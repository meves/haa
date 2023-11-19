'use client'

import { AcceptCheck } from '../../Widgets/AcceptCheck/AcceptCheck'
import { Input } from '../../Input/Input'
import { RedirectionRemark } from '../../Widgets/RedirectionRemark/RedirectionRemark'
import { SubmitButton } from '../../Widgets/FormButtons'
import { Autocompletes, InputNames, Lables, Placeholders } from '../../libs/enums'
import { useCreateInputRefs } from '../../libs/hooks/useCreateInputRefs'
import { useSubmitForm } from '../../libs/hooks/useSubmitForm'
import { usePasswordsMatch } from '../../libs/hooks/usePasswordsMatch'
import { useControlFormState } from '../../libs/hooks/useControlFormState'
import { Form } from '../Form/Form'

export const RegistrationForm = () => {
    const { 
        firstNameRef, lastNameRef, companyRef, emailRef, passwordRef, rePasswordRef
    } = useCreateInputRefs()
    
    const {
        setPassword, setRePassword, isPasswordMatch, setIsPasswordsMatch
    } = usePasswordsMatch()

    const { 
        isChecked, setIsChecked, isDisabled, 
        setFormError, setRequiredFields
    } = useControlFormState('registration', isPasswordMatch)

    const handleOnSubmitForm = useSubmitForm([
        firstNameRef, lastNameRef, companyRef, emailRef, passwordRef, rePasswordRef
    ], null, setIsChecked, setIsPasswordsMatch) // thunk creator

    return (
        <Form 
            onSubmit={handleOnSubmitForm}
            legend='Регистрация'
        >                
            <Input
                name={InputNames.FirstName}
                label={Lables.FirstName}
                type="text"
                placeholder={Placeholders.FirstName}
                autoComplete={Autocompletes.FirstName}
                ref={firstNameRef}
                setFormError={setFormError}
            />

            <Input
                name={InputNames.LastName}
                label={Lables.LastName}
                type="text"
                placeholder={Placeholders.LastName}
                autoComplete={Autocompletes.LastName}
                ref={lastNameRef}
                setFormError={setFormError}
            />

            <Input
                name={InputNames.Company}
                label={Lables.Company}
                type="text"
                placeholder={Placeholders.Company}
                autoComplete={Autocompletes.Company}
                ref={companyRef}
                setFormError={setFormError}
                setRequiredFields={setRequiredFields}
            />

            <Input
                name={InputNames.Email}
                label={Lables.Email}
                type="email"
                placeholder={Placeholders.Email}
                autoComplete={Autocompletes.Email}
                ref={emailRef}
                setFormError={setFormError}
                setRequiredFields={setRequiredFields}
            />

            <Input
                name={InputNames.Password}
                label={Lables.Password}
                type="password"
                placeholder={Placeholders.Password}
                autoComplete={Autocompletes.NewPassword}
                isPassword
                ref={passwordRef}
                setPassword={setPassword}
                isPasswordMatch={isPasswordMatch}
                setIsPasswordsMatch={setIsPasswordsMatch}
                setFormError={setFormError}
                setRequiredFields={setRequiredFields}
            />

            <Input
                name={InputNames.SubmitPassword}
                label={Lables.SubmitPassword}
                type="password"
                placeholder={Placeholders.SubmitPassword}
                autoComplete={Autocompletes.NewPassword}
                isPassword
                ref={rePasswordRef}
                setPassword={setRePassword}
                isPasswordMatch={isPasswordMatch}
                setIsPasswordsMatch={setIsPasswordsMatch}
                setFormError={setFormError}
                setRequiredFields={setRequiredFields}
            />

            <AcceptCheck
                setIsChecked={setIsChecked}
                isChecked={isChecked}
            />
                
            <SubmitButton
                text="Зарегистрироваться"
                isDisabled={isDisabled}
            />

            <RedirectionRemark/>
        </Form>
    )
}