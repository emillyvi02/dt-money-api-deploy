import { ConflictException } from "@nestjs/common";
import { CreateUserService } from "./create-user.service";

const mockUserRepository = {
    create: jest.fn(),
    findAll: jest.fn(),
    findById: jest.fn(),
    findByEmail: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
};

describe("CreateUserService", () => {
    let service: CreateUserService;

    beforeEach(() => {
        service = new CreateUserService(mockUserRepository as any);
        jest.clearAllMocks();
    });

    it("deve criar um usuário com senha criptografada", async () => {
        mockUserRepository.findByEmail.mockResolvedValue(null);
        mockUserRepository.create.mockResolvedValue({
            id: "uuid-1",
            name: "João",
            email: "joao@email.com",
            password: "hashed",
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        const result = await service.execute({
            name: "João",
            email: "joao@email.com",
            password: "123456",
        });

        expect(result).not.toHaveProperty("password");
        expect(mockUserRepository.create).toHaveBeenCalledTimes(1);
    });

    it("deve lançar erro se e-mail já existir", async () => {
        mockUserRepository.findByEmail.mockResolvedValue({
            id: "uuid-1",
            email: "joao@email.com",
        });

        await expect(
            service.execute({
                name: "João",
                email: "joao@email.com",
                password: "123456",
            }),
        ).rejects.toThrow(ConflictException);
    });
});
