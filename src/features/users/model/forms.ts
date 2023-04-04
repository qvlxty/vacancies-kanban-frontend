
import { requiredValidator } from '@/lib/validator'
import { createForm } from 'effector-forms'

export const userForm = createForm({
    fields: {
        fio: {
            init: '',
            rules: [requiredValidator],
        },
        login: {
            init: "",
            rules: [requiredValidator],
        },
        password: {
            init: '',
            rules: [requiredValidator],
        }
    },
    validateOn: ["submit"],
})
