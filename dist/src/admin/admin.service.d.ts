import { PrismaService } from 'src/prisma/prisma.service';
import { adminCredintials } from './dtos/admin.login';
import { JwtStrategy } from 'src/JWT/jwt.stategy';
export declare class AdminService {
    private readonly prismaService;
    private readonly jwtStrategy;
    constructor(prismaService: PrismaService, jwtStrategy: JwtStrategy);
    findAdmin(data: adminCredintials): Promise<string>;
}
