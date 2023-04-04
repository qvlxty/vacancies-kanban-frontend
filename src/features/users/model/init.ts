import { sample } from "effector";
import { deleteUser, fetchUsers } from "./private";
import { createUserFx, deleteUserFx, fetchUsersFx } from "@/dal";
import { $users } from "./public";
import { loadApp } from "@/features/app/model";
import { userForm } from "./forms";
import { showNotification } from "@/ui/notifications";

$users.on(fetchUsersFx.doneData, (_, s) => s)

sample({
    clock: [fetchUsers, loadApp, deleteUserFx.done],
    target: fetchUsersFx
})


sample({
    clock: userForm.formValidated,
    target: createUserFx
})

sample({
    clock: createUserFx.done,
    target: userForm.reset,
})

sample({
    clock: createUserFx.fail,
    fn: () => ({
        message: 'Произошла ошибка'
    }),
    target: showNotification
})

sample({
    clock: createUserFx.failData,
    fn: (m) => ({ message: m.join('\n') }),
    target: showNotification
})

sample({
    clock: deleteUser,
    target: deleteUserFx,
})

