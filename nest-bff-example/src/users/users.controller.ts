import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { CoreService, User } from 'src/core/core.service';

@Controller('users')
export class UsersController {
  constructor(private readonly coreService: CoreService) {}

  @Get()
  async getUsers(): Promise<Array<User>> {
    return this.coreService.getUsers();
  }

  @Get('/:id')
  async getUserById(@Param('id') id: string): Promise<User> {
    const user = await this.coreService.getUserById(id);
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }
}
