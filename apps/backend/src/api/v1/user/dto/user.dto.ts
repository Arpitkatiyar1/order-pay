export class CreateUserDto {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  contact: string;
  createdBy?: string;
}
export class ValidatedUserDto {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  created_by: string;
}
export class UserCredentialsDto{
  email: string;
  password: string;
}
export class UserApisResponseDto{
  status: number;
  message: string;
}