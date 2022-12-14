import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private usersRepository : Repository<User>){}

  create(createUserDto: CreateUserDto) {
    const newUser = this.usersRepository.create(createUserDto)
    return this.usersRepository.save(newUser)
  }

  findAll() {
    const users = this.usersRepository.find()
    return users
  }

  findOne(id: number) {
    const user = this.usersRepository.findOneBy({id})
    return user
  }

  async update(id: number, updateUserDto: UpdateUserDto) {

    // first way
    // const user = await this.findOne(id)
    // return this.usersRepository.save({...user , ...updateUserDto})
    
    // second way
    return this.usersRepository.update(id,updateUserDto)
  }

  remove(id: number) {
    // first way 
    // const user = this.usersRepository.findOneBy({id})
    // return this.usersRepository.remove(id,user)

    // second way
    return this.usersRepository.delete(id)
  }
}
