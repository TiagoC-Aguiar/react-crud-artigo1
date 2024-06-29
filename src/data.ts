import { UserType } from './user/UserPage';

export const usersData: Array<UserType> = [
  { id: 1, name: 'Tania', username: 'floppydiskette' },
  { id: 2, name: 'Craig', username: 'siliconeidolon' },
  { id: 3, name: 'Ben', username: 'benisphere' },
];

export const initialFormState = { id: 0, name: '', username: '' };
