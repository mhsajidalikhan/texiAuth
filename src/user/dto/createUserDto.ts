import { IsString,IsEmail,IsNumberString } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class CreateUserDto{

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsNumberString()
    password: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto){}