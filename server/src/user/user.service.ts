import { PrismaService } from "src/prisma.service";
import { UserDto } from "./user.dto";
import { hash } from "argon2";

export class UserService {
    constructor(private prisma: PrismaService) { }
    
    async getById(id: string) {
        return this.prisma.user.findUnique({
            where: {id}
        })
    }

    async getByEmail(email: string) {
        return this.prisma.user.findUnique({
            where: {email}
        })
    }

    async getProfile(id: string) {
        const profile = await this.getById(id)
        const { password, ...rest } = profile
        
        return {
            user: rest
        }
    }
    async create(dto: UserDto) {
        const user = {
            email: dto.email,
            phone: dto.phone,
            password: await hash(dto.password),
            fullName: dto.name,
        }

        return this.prisma.user.create({
            data: user
        })
    }

    async update(id: string, dto: UserDto) {
        let data = dto

        if (dto.password) {
            data = {...dto, password: await hash(dto.password)}
        }
        return this.prisma.user.update({
            where: { id },
            data,
            select: {
                appointmentsAsClient: true
            }
        })
    }
}