import { Module } from "@nestjs/common";
import { PrismaService } from "src/shared/prisma.service";
import { IUserRepository } from "./infra/repositories/user.repository.abstract";
import { PrismaUserRepository } from "./infra/repositories/prisma/prisma.user.repository";
import { userServices } from "./services";
import { userControllers } from "./controllers";

@Module({
    imports: [],
    controllers: [...userControllers],
    providers: [PrismaService, {
        provide: IUserRepository,
        useClass: PrismaUserRepository
    }, ...userServices]
})
export class UsersModule {}
