import { Respondent } from "@/dal/interfaces";
import { d } from "./domain";

export const $nearRespondents = d.store<Respondent[]>([])
export const getNearRespondents = d.event()