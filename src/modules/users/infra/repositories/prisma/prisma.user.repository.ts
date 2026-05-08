import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/prisma.service";
import { CreateUserDto } from "../../../dto/create-user.dto";
import { UpdateUserDto } from "../../../dto/update-user.dto";
import { IUserRepository } from "../user.repository.abstract";

@Injectable()
export class PrismaUserRepository implements IUserRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(data: CreateUserDto) {
        return this.prisma.user.create({ data });
    }

    async findAll() {
        return this.prisma.user.findMany();
    }

    async findById(id: string) {
        return this.prisma.user.findUnique({ where: { id } });
    }

    async findByEmail(email: string) {
        return this.prisma.user.findUnique({ where: { email } });
    }

    async update(id: string, data: UpdateUserDto) {
        return this.prisma.user.update({ where: { id }, data });
    }

    async delete(id: string) {
        await this.prisma.user.delete({ where: { id } });
    }
}
