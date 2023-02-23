import {
    IsEmail,
    IsNotEmpty,
    IsNumberString,
    IsOptional,
    IsPhoneNumber,
    IsString
} from 'class-validator';
import { Trim } from '../sanitizers/trim-sanitizer';
import { StringLength } from '../validators/string-length-validator';

export class UserIdUrlPramDTO {
    @IsNumberString()
    @IsNotEmpty()
    userId: string;
}

export class CreateUserDTO {
    @Trim()
    @StringLength(1, 255)
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Trim()
    @StringLength(1, 255)
    @IsString()
    @IsNotEmpty()
    name: string;

    @Trim()
    @StringLength(1, 30)
    @IsPhoneNumber()
    @IsNotEmpty()
    phone: string;

    @Trim()
    @StringLength(1, 255)
    @IsString()
    @IsNotEmpty()
    slotName: string;
}

export class UpdateUserDTO {
    @Trim()
    @StringLength(1, 255)
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name?: string;

    @Trim()
    @StringLength(1, 30)
    @IsPhoneNumber()
    @IsNotEmpty()
    @IsOptional()
    phone?: string;
}

export class CreateCertificateDTO {
    courseName: string;
    grade: string;
    slotId: number;
    certificateNumber: string;
}
