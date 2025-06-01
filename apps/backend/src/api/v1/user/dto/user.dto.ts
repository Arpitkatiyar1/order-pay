export class CreateUserDto {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  contact: string;
  createdBy?: string;
}
