import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dto/create-user.dto";
import { IUserRepository } from "../infra/repositories/user.repository.abstract";
import * as bcrypt from "bcrypt";

@Injectable()
export class CreateUserService {
    constructor(private readonly userRepository: IUserRepository) {}

    async execute(data: CreateUserDto) {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const user = await this.userRepository.create({
            ...data,
            password: hashedPassword,
        });
        const { password: _, ...result } = user;
        return result;
    }
}
