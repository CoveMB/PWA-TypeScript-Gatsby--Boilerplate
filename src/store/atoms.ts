import { atom } from 'recoil';
import { User, UserData } from 'types';

export const userState = atom<User | undefined>({
  key    : 'userState',
  default: undefined,
});

export const userDataState = atom<UserData>({
  key    : 'userDataState',
  default: {
    tokens: [], email: ''
  },
});
