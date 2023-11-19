'use client'

import { SubmitButton, CancelButton } from '../../Widgets/FormButtons'
import { Input } from '../../Input/Input'
import { Autocompletes, InputNames, Lables, Placeholders } from '../../libs/enums'
import { useControlFormState } from '../../libs/hooks/useControlFormState'
import { useCreateInputRefs } from '../../libs/hooks/useCreateInputRefs'
import { usePasswordsMatch } from '../../libs/hooks/usePasswordsMatch'
import { useSubmitForm } from '../../libs/hooks/useSubmitForm'
import styles from './ChangePasswordForm.module.scss'
import { Form } from '../Form/Form'

export const ChangePasswordForm = () => {
    const { 
        passwordRef, rePasswordRef
    } = useCreateInputRefs()

    const {
        setPassword, setRePassword, isPasswordMatch, setIsPasswordsMatch
    } = usePasswordsMatch()

    const { 
        isDisabled, setFormError, setRequiredFields
    } = useControlFormState('change_pwd', isPasswordMatch)


    const handleOnSubmitForm = useSubmitForm([
        passwordRef, passwordRef, rePasswordRef
    ], null, setIsPasswordsMatch) // thunk creator

    return (
        <Form
            onSubmit={handleOnSubmitForm}
            legend='Смена пароля'
        >
            <Input
                name={InputNames.OldPassword}
                label={Lables.OldPassword}
                type="password"
                placeholder={Placeholders.OldPassword}
                autoComplete={Autocompletes.CurrentPassword}
                isPassword
                ref={passwordRef}
                setPassword={setPassword}
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

            <div className={styles.buttonWrapper}>
                <div className={styles.formButton}>
                    <CancelButton
                        text="Отмена"
                    />
                </div>
                <div className={styles.formButton}>
                    <SubmitButton
                        text="Сохранить"
                        isDisabled={isDisabled}
                    />
                </div>
            </div> 

        </Form>
    )
}