'use client'

import { Input } from '../../Input/Input' 
import { useControlFormState } from '../../libs/hooks/useControlFormState'
import { useCreateInputRefs } from '../../libs/hooks/useCreateInputRefs'
import { useSubmitForm } from '../../libs/hooks/useSubmitForm'
import styles from './ForgetPasswordForm.module.scss'
import { Autocompletes, InputNames, Lables, Placeholders } from '../../libs/enums'
import { SubmitButton } from '../../Widgets/FormButtons'
import { Form } from '../Form/Form'

export const ForgetPasswordForm = () => {
    const { emailRef } = useCreateInputRefs()

    const { isDisabled, setFormError, setRequiredFields } = useControlFormState('reset_pwd')

    const handleOnSubmitForm = useSubmitForm([emailRef], null) // thinkCreator

    return (
        <Form
            onSubmit={handleOnSubmitForm}
            legend='Забыли пароль'
        >
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

            <div className={styles.buttonWrapper}>
                <div className={styles.formButton}>
                    <SubmitButton
                        text="Восстановить пароль"
                        isDisabled={isDisabled}
                    />
                </div>
            </div>
        </Form>
    )
}