import { Logo } from './logo.interface';

export interface Organisation {
  name: String;
  website: String;
  listOfSigningNames: String;
  logo: Logo;
  email: String;
  contactPerson: String;
  phone: String;
}
