import {
    $modalVisible,
    $vacancyId,
    closeModal,
    deleteVacancy,
    resetState,
} from "./private";
import { sample } from "effector";
import { vacancyForm } from "./forms";
import { createVacancy, openVacancyEdit } from './public'
import { pushNavigate } from "@/features/app/model";
import { createVacancyFx, deleteVacancyFx, fetchSingleVacancyFx, updateVacancyFx } from "@/dal";

$vacancyId
    .on(openVacancyEdit, (_, s) => s)
    .reset(resetState)

$modalVisible
    .on(openVacancyEdit, () => true)
    .reset([closeModal, updateVacancyFx.done])

sample({
    clock: openVacancyEdit,
    target: fetchSingleVacancyFx
})

sample({
    clock: fetchSingleVacancyFx.doneData,
    target: vacancyForm.set
})

sample({
    clock: vacancyForm.formValidated,
    source: $vacancyId,
    fn: (id, { title, description, isOpen, stack }) => ({
        id,
        title,
        description,
        isOpen,
        stack
    }),
    filter: Boolean,
    target: updateVacancyFx,
})


sample({
    clock: createVacancy,
    target: createVacancyFx
})

sample({
    clock: deleteVacancy,
    source: $vacancyId,
    filter: Boolean,
    target: deleteVacancyFx
})