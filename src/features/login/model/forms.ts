import { requiredValidator } from '@/lib/validator'
import { createForm } from 'effector-forms'

export const loginForm = createForm({
    fields: {
        login: {
            init: "",
            rules: [requiredValidator],
        },
        password: {
            init: "", 
            rules: [requiredValidator],
        },
    },
    validateOn: ["submit"],
})
