import { Body, Controller, Post } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "../dto/create-user.dto";
import { CreateUserService } from "../services/create-user.service";

@ApiTags("Users")
@Controller("users")
export class CreateUserController {
    constructor(private readonly createUserService: CreateUserService) {}

    @Post()
    @ApiOperation({ summary: "Criar um novo usuário" })
    @ApiBody({ type: CreateUserDto })
    @ApiResponse({ status: 201, description: "Usuário criado com sucesso" })
    @ApiResponse({ status: 409, description: "E-mail já cadastrado" })
    async handle(@Body() dto: CreateUserDto) {
        return this.createUserService.execute(dto);
    }
}
