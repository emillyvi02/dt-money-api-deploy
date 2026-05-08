import { Injectable, NotFoundException } from "@nestjs/common";
import { IUserRepository } from "../infra/repositories/user.repository.abstract";

@Injectable()
export class DeleteUserService {
    constructor(private readonly userRepository: IUserRepository) {}

    async execute(id: string) {
        const existing = await this.userRepository.findById(id);
        if (!existing) {
            throw new NotFoundException(`Usuário com id "${id}" não encontrado`);
        }
        await this.userRepository.delete(id);
    }
}
