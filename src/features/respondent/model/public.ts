import { createRespondentFx, deleteRespondentFx, updateRespondentFx } from "@/dal";
import { d } from "./domain";

export const openRespondentEdit = d.event<string>()
export const onRespondentEditDone = updateRespondentFx.done

export const onCreateRespondent = createRespondentFx.done
export const onDeleteRespondent = deleteRespondentFx.done
export const deleteRespondent = d.event()
export const createRespondent = d.event<number | void>()