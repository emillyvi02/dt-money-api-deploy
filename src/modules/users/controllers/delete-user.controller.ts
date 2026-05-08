import { Controller, Delete, HttpCode, Param } from "@nestjs/common";
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { DeleteUserService } from "../services/delete-user.service";

@ApiTags("Users")
@Controller("users")
export class DeleteUserController {
    constructor(private readonly deleteUserService: DeleteUserService) {}

    @Delete(":id")
    @HttpCode(204)
    @ApiOperation({ summary: "Deletar usuário" })
    @ApiParam({ name: "id", description: "UUID do usuário" })
    @ApiResponse({ status: 204, description: "Usuário deletado com sucesso" })
    @ApiResponse({ status: 404, description: "Usuário não encontrado" })
    async handle(@Param("id") id: string) {
        return this.deleteUserService.execute(id);
    }
}
