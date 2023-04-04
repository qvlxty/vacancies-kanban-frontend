import { requiredValidator } from '@/lib/validator'
import { createForm } from 'effector-forms'

export const vacancyForm = createForm({
    fields: {
        title: {
            init: "",
            rules: [requiredValidator],
        },
        description: {
            init: "",
            rules: [requiredValidator],
        },
        stack: {
            init: ''
        },
        isOpen: {
            init: true,
        }
    },
    validateOn: ["submit"],
})
