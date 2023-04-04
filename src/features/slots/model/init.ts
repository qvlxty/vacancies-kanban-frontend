import { sample } from "effector";
import { $nearRespondents, getNearRespondents } from "./public";
import { fetchTimetableFx } from "@/dal";


$nearRespondents
    .on(fetchTimetableFx.doneData, (_, s) => s)

sample({
    clock: getNearRespondents,
    target: fetchTimetableFx
})