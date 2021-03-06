import { Logo } from './logo.interface';

export interface Organisation {
  name: string;
  website: string;
  listOfSigningNames: string;
  logo: Logo;
  email: string;
  contactPerson: string;
  phone: string;
}
