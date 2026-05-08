import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: "Francisca Silva" })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: "francisca@email.com" })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ example: "senha123" })
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;
}
