import { Controller, Get, Query } from "@nestjs/common";
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { FindUserByEmailService } from "../services/find-user-by-email.service";

@ApiTags("Users")
@Controller("users")
export class FindUserByEmailController {
    constructor(private readonly findUserByEmailService: FindUserByEmailService) {}

    @Get("by-email")
    @ApiOperation({ summary: "Buscar usuário por e-mail" })
    @ApiQuery({ name: "email", example: "joao@email.com" })
    @ApiResponse({ status: 200, description: "Usuário encontrado" })
    @ApiResponse({ status: 404, description: "Usuário não encontrado" })
    async handle(@Query("email") email: string) {
        return this.findUserByEmailService.execute(email);
    }
}
