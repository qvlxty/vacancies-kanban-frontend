import { attachWrapper } from "@42px/effector-extra";
import { User } from "../interfaces";
import { Method, authRequestFx } from "../request";
import { RegisterFxPayload } from "./types";
import { AxiosError } from "axios";

export const fetchUsersFx = attachWrapper({
    effect: authRequestFx,
    mapParams: () => ({
        method: Method.get,
        url: '/user',
    }),
    mapResult: ({ result }) => result.data as User[]
})

export const createUserFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (body: RegisterFxPayload) => ({
        body,
        url: '/user/register',
        method: Method.post,
    }),
    mapResult: () => ({}),
    mapError: ({ error }: { error: AxiosError<any> }) => error?.response?.data?.message as string[]
})

export const deleteUserFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (userId: string | number) => ({
        userId,
        url: `/user/${userId}`,
        method: Method.delete,
    }),
    mapError: ({ error }: { error: AxiosError<any> }) => error?.response?.data?.message as string[]
})