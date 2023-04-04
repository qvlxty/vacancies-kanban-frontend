import { User } from "@/dal/interfaces";
import { d } from "./domain";

export const $users = d.store<User[]>([])