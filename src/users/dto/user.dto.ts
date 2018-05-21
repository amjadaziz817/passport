import { ApiModelProperty } from '@nestjs/swagger';

export class UserDTO {
  @ApiModelProperty({description: 'First Name', required: true, type: String, default: 'Amjad'})
  readonly first_name: String;
  @ApiModelProperty({description: 'Last Name', required: true, type: String, default: 'Aziz'})
  readonly last_name: String;
  @ApiModelProperty({description: 'User Email', required: true, type: String, default: 'amjad.aziz817@gmail.com'})
  readonly email: String;
  @ApiModelProperty({description: 'User Age', type: Number, default: 30})
  readonly age: Number;
 
}