import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { FindUserByIdService } from "../services/find-user-by-id.service";

@ApiTags("Users")
@Controller("users")
export class FindUserByIdController {
    constructor(private readonly findUserByIdService: FindUserByIdService) {}

    @Get(":id")
    @ApiOperation({ summary: "Buscar usuário por ID" })
    @ApiParam({ name: "id", description: "UUID do usuário" })
    @ApiResponse({ status: 200, description: "Usuário encontrado" })
    @ApiResponse({ status: 404, description: "Usuário não encontrado" })
    async handle(@Param("id") id: string) {
        return this.findUserByIdService.execute(id);
    }
}
