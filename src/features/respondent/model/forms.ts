import { requiredValidator } from '@/lib/validator'
import { createForm } from 'effector-forms'

export const respondentForm = createForm({
    fields: {
        title: {
            init: "",
            rules: [requiredValidator],
        },
        description: {
            init: "",
        },
        essay: {
            init: "",
        },
        feedback: {
            init: "",
        },
        additionalMessages: {
            init: "",
        },
        resumeUrl: {
            init: '',
        },
        userId: {
            init: null as null | number,
        },
        file: {
            init: null as null | File
        },
        status: {
            init: '',
        },
        interviewDate: {
            init: null as null | Date
        },
    },
    validateOn: ["submit"],
})
