import { Body, Controller, Param, Put } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UpdateUserDto } from "../dto/update-user.dto";
import { UpdateUserService } from "../services/update-user.service";

@ApiTags("Users")
@Controller("users")
export class UpdateUserController {
    constructor(private readonly updateUserService: UpdateUserService) {}

    @Put(":id")
    @ApiOperation({ summary: "Atualizar usuário" })
    @ApiParam({ name: "id", description: "UUID do usuário" })
    @ApiBody({ type: UpdateUserDto })
    @ApiResponse({ status: 200, description: "Usuário atualizado com sucesso" })
    @ApiResponse({ status: 404, description: "Usuário não encontrado" })
    async handle(@Param("id") id: string, @Body() dto: UpdateUserDto) {
        return this.updateUserService.execute(id, dto);
    }
}
