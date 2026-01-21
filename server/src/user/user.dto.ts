import { IsEmail, IsOptional, IsString } from "class-validator";

export class UserDto {
    @IsString()
    @IsEmail()
    @IsOptional()
    email: string

    @IsString()
    @IsOptional()
    password: string

    @IsString()
    @IsEmail()
    @IsOptional()
    phone: string

    @IsString()
    @IsEmail()
    @IsOptional()
    name: string
}