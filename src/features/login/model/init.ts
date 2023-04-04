import * as dal from "@/dal";
import { sample } from "effector";
import { loginForm } from "./forms";
import { loginFx } from "./private";
import { logout } from "./public";


sample({
    clock: loginForm.formValidated,
    target: loginFx
})

sample({
    clock: loginFx.doneData,
    fn: (p) => `Bearer ${p}`,
    target: dal.saveAccessTokenFx,
})

sample({
    clock: logout,
    target: dal.clearAccessToken
})
