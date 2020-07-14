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

// State & Store & Actions types //
// State
type State = {
  user: User
  userData: UserData
};

// Store
type PossibleStores = User & UserData;

type PartialState = Partial<State>;

// Actions
type UserActions = 'SET_USER';
type UserDataActions = 'UPDATE_USER_DATA';

type PossibleActions = UserActions | UserDataActions;
