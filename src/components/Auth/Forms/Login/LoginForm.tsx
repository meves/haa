'use client'

import { Input } from '../../Input/Input'
import { Autocompletes, InputNames, Lables, Placeholders } from '../../libs/enums'
import styles from './LoginForm.module.scss'
import { useCreateInputRefs } from '../../libs/hooks/useCreateInputRefs'
import { SubmitButton } from '../../Widgets/FormButtons'
import { RedirectionRemark } from '../../Widgets/RedirectionRemark/RedirectionRemark'
import { useSubmitForm } from '../../libs/hooks/useSubmitForm'
import { useControlFormState } from '../../libs/hooks/useControlFormState'
import { Form } from '../Form/Form'

export const LoginForm = () => {
    const { emailRef, passwordRef } = useCreateInputRefs()

    const { isDisabled, setFormError, setRequiredFields } = useControlFormState('login')

    const handleOnSubmitForm = useSubmitForm([emailRef, passwordRef], null) // thinkCreator

    return (
        <Form 
            onSubmit={handleOnSubmitForm}
            legend='Вход'
            isAccountCreated={false} // only after activation
        >
            <Input
                name={InputNames.Email}
                label={Lables.Email}
                type='email'
                placeholder={Placeholders.Email}
                autoComplete={Autocompletes.Email}
                ref={emailRef}
                setFormError={setFormError}
                setRequiredFields={setRequiredFields}
            />

            <Input
                name={InputNames.Password}
                label={Lables.Password}
                type='password'
                placeholder={Placeholders.Password}
                autoComplete={Autocompletes.CurrentPassword}
                isPassword
                isLogin
                ref={passwordRef}
                setFormError={setFormError}
                setRequiredFields={setRequiredFields}
            />
            
            <div className={styles.buttonWrapper}>
                <SubmitButton
                    text="Войти"
                    isDisabled={isDisabled}
                />
            </div>

            <RedirectionRemark
                isLogin
            />
        </Form>
    )
}