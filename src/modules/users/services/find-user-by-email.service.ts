import { Injectable, NotFoundException } from "@nestjs/common";
import { IUserRepository } from "../infra/repositories/user.repository.abstract";

@Injectable()
export class FindUserByEmailService {
    constructor(private readonly userRepository: IUserRepository) {}

    async execute(email: string) {
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new NotFoundException(`Usuário com e-mail "${email}" não encontrado`);
        }
        const { password: _, ...result } = user;
        return result;
    }
}
