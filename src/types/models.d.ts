// Models
type AuthToken = {
  token: string,
  expiration: Date | string,
};

type Token = {
  token: string,
  expiration: Date | string,
  device: string
};

type User = {
  email?: string,
  uuid?: string
};

type UserData = {
  tokens: Token[],
};

// State & Actions types //
// State
type State = {
  user: User
  userData: UserData
};

// Actions
type ModelsActions = {
  user: 'SET_USER'
  userData: 'UPDATE_USER_DATA'
};
