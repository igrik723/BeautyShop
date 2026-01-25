import { Body, Controller, HttpCode, Post, UsePipes, ValidationPipe, Res, Req, UnauthorizedException, Get } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/Auth.dto";
import { Response, Request} from "express";
import { CurrentUser } from "./decorators/user.decorator";
import { Auth } from "./decorators/auth.decorator";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    
    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Post('login')
    async login(@Body() dto: AuthDto, @Res({ passthrough: true }) res: Response) {
        const { refreshToken, ...response } = await this.authService.login(dto)
        this.authService.addRefreshTokenToResponse(res, refreshToken)

        return response
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Post('register')
    async register(@Body() dto: AuthDto, @Res({ passthrough: true }) res: Response) {
        const { refreshToken, ...response } = await this.authService.register(dto)
        this.authService.addRefreshTokenToResponse(res, refreshToken)

        return response
    }

    @HttpCode(200)
    @Post('login/access-token')
    async getNewTokens(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
        const refreshTokenFromCookies = req.cookies[this.authService.REFRESH_TOKEN_NAME]
        if (!refreshTokenFromCookies) {
            this.authService.removeRefreshToken(res)
            throw new UnauthorizedException('Refresh token not passed')
        }
        
        const { refreshToken, ...response } = await this.authService.getNewTokens(refreshTokenFromCookies)

        this.authService.addRefreshTokenToResponse(res, refreshToken)

        return response
    }

    @HttpCode(200)
    @Post('logout')
    async logout(@Res({passthrough: true}) res: Response) {
        this.authService.removeRefreshToken(res)

        return true
    }

    @HttpCode(200)
    @Post('check')
    async checkAuth(@Req() req: Request) {
        return this.authService.checkAuth(req)
    }

    @Get('role')
    @Auth()
    async checkRole(@CurrentUser('id') id: string) {
        return this.authService.checkRole(id)
    }
}