import { CreateUserController } from "./create-user.controller";
import { DeleteUserController } from "./delete-user.controller";
import { FindAllUsersController } from "./find-all-users.controller";
import { FindUserByEmailController } from "./find-user-by-email.controller";
import { FindUserByIdController } from "./find-user-by-id.controller";
import { UpdateUserController } from "./update-user.controller";

export const userControllers = [
    CreateUserController,
    FindAllUsersController,
    FindUserByIdController,
    FindUserByEmailController,
    UpdateUserController,
    DeleteUserController,
];
