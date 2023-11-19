'use client'

import classNames from 'classnames'
import { Input } from '../../Input/Input'
import { SubmitButton, CancelButton } from '../../Widgets/FormButtons'
import { Autocompletes, InputNames, Lables, Placeholders } from '../../libs/enums'
import { useControlFormState } from '../../libs/hooks/useControlFormState'
import { useCreateInputRefs } from '../../libs/hooks/useCreateInputRefs'
import { usePasswordsMatch } from '../../libs/hooks/usePasswordsMatch'
import { useSubmitForm } from '../../libs/hooks/useSubmitForm'
import { Form } from '../Form/Form'
import styles from './NewPasswordForm.module.scss'

export const NewPasswordForm = () => {

    const { passwordRef, rePasswordRef } = useCreateInputRefs()

    const {
        setPassword, setRePassword, isPasswordMatch, setIsPasswordsMatch
    } = usePasswordsMatch()

    const { 
        isDisabled, setFormError, setRequiredFields
    } = useControlFormState('new_pwd', isPasswordMatch)

    const handleOnSubmitForm = useSubmitForm([
        passwordRef, rePasswordRef
    ], null, setIsPasswordsMatch) // thunk creator

    return (
        <Form
            onSubmit={handleOnSubmitForm}
            legend='Новый пароль'
        >
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