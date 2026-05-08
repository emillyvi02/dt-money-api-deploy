import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { UpdateUserDto } from "../dto/update-user.dto";
import { IUserRepository } from "../infra/repositories/user.repository.abstract";

@Injectable()
export class UpdateUserService {
    constructor(private readonly userRepository: IUserRepository) {}

    async execute(id: string, data: UpdateUserDto) {
        const existing = await this.userRepository.findById(id);
        if (!existing) {
            throw new NotFoundException(`Usuário com id "${id}" não encontrado`);
        }

        if (data.email && data.email !== existing.email) {
            const emailTaken = await this.userRepository.findByEmail(data.email);
            if (emailTaken) {
                throw new ConflictException("E-mail já está em uso");
            }
        }

        if (data.password) {
            data.password = await bcrypt.hash(data.password, 10);
        }

        const updated = await this.userRepository.update(id, data);
        const { password: _, ...result } = updated;
        return result;
    }
}
