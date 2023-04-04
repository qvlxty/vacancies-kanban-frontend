import { User } from "@/dal/interfaces";
import { d } from "./domain";


export const fetchUsers = d.event()
export const deleteUser = d.event<string | number>()