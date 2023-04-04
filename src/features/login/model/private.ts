import { attachWrapper } from "@42px/effector-extra";
import { d } from "./domain";
import { LoginFxPayload } from "./types";
import { Method, requestFx } from "@/dal";

export const loginFx = attachWrapper({
    domain: d,
    effect: requestFx,
    mapParams: (body: LoginFxPayload) => ({
        body,
        url: '/auth',
        method: Method.post,
    }),
    mapResult: ({ result }) => result.data.access_token as string,
})