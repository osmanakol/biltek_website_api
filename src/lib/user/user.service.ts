import { IService } from '../../interfaces/IService';
import { UserDto } from './user.dto';
import UserModel from './user.model';
import { UserRepository } from './user.repository';
import { FilterQuery, Document, SaveOptions, UpdateQuery, QueryUpdateOptions, QueryFindBaseOptions, QueryFindOptions } from 'mongoose';
import RoleModel from '../acl/role-manager/role.model';

export class UserService implements IService<UserDto>{
    private _userRepository:UserRepository
    
    constructor(){
        this._userRepository = new UserRepository(UserModel)
    }
    
    
    public async findOne(filter: FilterQuery<UserDto>, projection: any, options: QueryFindBaseOptions): Promise<UserDto> {
        const result = await this._userRepository.findOne(filter,projection, options)
        return result as unknown as UserDto
    }
    public async find(filter: FilterQuery<UserDto>, projection:any, options: QueryFindOptions): Promise<UserDto[]> {
        const result = await this._userRepository.find(filter, projection,options)
        return result as unknown as UserDto[]
    }
    public async create(dtoItem: UserDto, options?: SaveOptions): Promise<UserDto> {
        const result = await this._userRepository.create(dtoItem, options)
        return result as unknown as UserDto
    }
    public async update(filter:FilterQuery<UserDto>, updateQuery:UpdateQuery<UserDto>, options:QueryUpdateOptions): Promise<UserDto> {
        const result = await this._userRepository.update(filter, updateQuery, options)
        return result as unknown as UserDto
    }
    delete(): void {
        throw new Error('Method not implemented.');
    }



}