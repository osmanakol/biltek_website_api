import { IsDate, IsEmail, IsMongoId, IsOptional, IsString, MinLength, } from "class-validator";
import { IModel } from "../../model/base.model";
import mongoose from 'mongoose';

export class UserDto implements IModel{
    @IsMongoId()
    @IsOptional()
    _id: mongoose.Schema.Types.ObjectId

    @IsString()
    @IsEmail(undefined, {
        message: "Mail yanlış"
    })
    email: string

    @IsString()
    @MinLength(5, {
        message: 'It can not be a name'
    })
    name_surname: string

    password:string

    verifiedDate:Date

    @IsDate()
    createdAt?: Date
    
    @IsDate()
    updatedAt?: Date

    /*constructor(email:string, name_surname:string){
        this.email = email
        this.name_surname = name_surname
    }*/
}