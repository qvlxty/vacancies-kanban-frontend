import { $accessToken } from "@/dal";
import { d } from "./domain";


export const $isUserAuthorized = $accessToken.map(
    (token) => token !== null
)


export const logout = d.event()
