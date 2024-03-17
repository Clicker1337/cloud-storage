import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        default: '123@mail.ru'
    })
    email: string;

    @ApiProperty({
        default: 'credo'
    })
    fullName: string;

    @ApiProperty({
        default: '123'
    })
    password: string;

}
