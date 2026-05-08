import { NotFoundException } from "@nestjs/common";
import { DeleteUserService } from "./delete-user.service";

const mockUserRepository = {
    create: jest.fn(),
    findAll: jest.fn(),
    findById: jest.fn(),
    findByEmail: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
};

describe("DeleteUserService", () => {
    let service: DeleteUserService;

    beforeEach(() => {
        service = new DeleteUserService(mockUserRepository as any);
        jest.clearAllMocks();
    });

    it("deve deletar um usuário existente", async () => {
        mockUserRepository.findById.mockResolvedValue({
            id: "uuid-1",
            name: "João",
            email: "joao@email.com",
        });

        await service.execute("uuid-1");
        expect(mockUserRepository.delete).toHaveBeenCalledWith("uuid-1");
    });

    it("deve lançar erro se usuário não existir", async () => {
        mockUserRepository.findById.mockResolvedValue(null);

        await expect(service.execute("uuid-inexistente")).rejects.toThrow(
            NotFoundException,
        );
        expect(mockUserRepository.delete).not.toHaveBeenCalled();
    });
});
