import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { FindAllUsersService } from "../services/find-all-users.service";

@ApiTags("Users")
@Controller("users")
export class FindAllUsersController {
    constructor(private readonly findAllUsersService: FindAllUsersService) {}

    @Get()
    @ApiOperation({ summary: "Listar todos os usuários" })
    @ApiResponse({ status: 200, description: "Lista de usuários" })
    async handle() {
        return this.findAllUsersService.execute();
    }
}
