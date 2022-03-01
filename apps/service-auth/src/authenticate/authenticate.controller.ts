import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthenticateService } from './authenticate.service';
import { CreateAuthenticateDto } from './dto/create-authenticate.dto';
import { UpdateAuthenticateDto } from './dto/update-authenticate.dto';

@Controller()
export class AuthenticateController {
  constructor(private readonly authenticateService: AuthenticateService) {}

  @MessagePattern('createAuthenticate')
  create(@Payload() createAuthenticateDto: CreateAuthenticateDto) {
    return this.authenticateService.create(createAuthenticateDto);
  }

  @MessagePattern('findAllAuthenticate')
  findAll() {
    return this.authenticateService.findAll();
  }

  @MessagePattern('findOneAuthenticate')
  findOne(@Payload() id: number) {
    return this.authenticateService.findOne(id);
  }

  @MessagePattern('updateAuthenticate')
  update(@Payload() updateAuthenticateDto: UpdateAuthenticateDto) {
    return this.authenticateService.update(
      updateAuthenticateDto.id,
      updateAuthenticateDto,
    );
  }

  @MessagePattern('removeAuthenticate')
  remove(@Payload() id: number) {
    return this.authenticateService.remove(id);
  }
}
