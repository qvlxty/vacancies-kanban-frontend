import { sample } from "effector";
import { respondentForm } from "./forms";
import { pushNavigate } from "@/features/app/model";
import { createRespondent, deleteRespondent, openRespondentEdit } from "./public";
import {
    $modalVisible,
    $respondentId,
    closeModal,
    resetState,
    uploadRespondentCv,
} from './private';
import { UploadRespondentCvFxPayload, createRespondentFx, deleteRespondentFx, fetchSingleRespondentFx, updateRespondentFx, uploadRespondentCvFx } from "@/dal";
import { showNotification } from "@/ui/notifications";

$respondentId
    .on(openRespondentEdit, (_, s) => s)
    .reset(resetState)

$modalVisible
    .on(openRespondentEdit, () => true)
    .reset([closeModal, updateRespondentFx.done])

sample({
    clock: openRespondentEdit,
    target: fetchSingleRespondentFx
})

sample({
    clock: uploadRespondentCvFx.done,
    filter: Boolean,
    source: $respondentId,
    target: fetchSingleRespondentFx
})

sample({
    clock: fetchSingleRespondentFx.doneData,
    fn: (p) => ({
        ...p,
        interviewDate: p.interviewDate ? new Date(p.interviewDate) : null
    }),
    target: respondentForm.set
})


sample({
    clock: createRespondent,
    target: createRespondentFx
})

sample({
    clock: respondentForm.formValidated,
    source: $respondentId,
    fn: (id, {
        title,
        description,
        status,
        interviewDate,
        userId,
        essay,
        feedback,
        additionalMessages
    }) => ({
        id,
        title,
        description,
        status,
        userId,
        interviewDate: interviewDate?.toISOString() || null,
        essay,
        feedback,
        additionalMessages
    }),
    filter: Boolean,
    target: updateRespondentFx,
})

sample({
    clock: deleteRespondent,
    filter: Boolean,
    source: $respondentId,
    target: deleteRespondentFx
})


sample({
    clock: uploadRespondentCv,
    source: {
        respondentId: $respondentId,
        file: respondentForm.fields.file.$value
    },
    filter: (a) => !!a.file && !!a.respondentId,
    fn: (a) => a as UploadRespondentCvFxPayload,
    target: uploadRespondentCvFx,
})
