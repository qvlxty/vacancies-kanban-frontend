import { sample } from "effector";
import { $isApploaded, loadApp } from "./public";
import { loadAccessTokenFx } from "@/dal";

$isApploaded
    .on(loadAccessTokenFx.done, () => true)

sample({
    clock: loadApp,
    target: loadAccessTokenFx
})