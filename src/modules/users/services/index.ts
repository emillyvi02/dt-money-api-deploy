import { CreateUserService } from "./create-user.service";
import { FindAllUsersService } from "./find-all-users.service";
import { FindUserByIdService } from "./find-user-by-id.service";
import { FindUserByEmailService } from "./find-user-by-email.service";
import { UpdateUserService } from "./update-user.service";
import { DeleteUserService } from "./delete-user.service";

export const userServices = [
    CreateUserService,
    FindAllUsersService,
    FindUserByIdService,
    FindUserByEmailService,
    UpdateUserService,
    DeleteUserService,
];
