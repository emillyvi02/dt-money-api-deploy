import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class UpdateUserDto {
    @ApiPropertyOptional({ example: "Maria Silva" })
    @IsString()
    @IsOptional()
    name?: string;

    @ApiPropertyOptional({ example: "maria@email.com" })
    @IsEmail()
    @IsOptional()
    email?: string;

    @ApiPropertyOptional({ example: "novaSenha123" })
    @IsString()
    @IsOptional()
    @MinLength(6)
    password?: string;
}
