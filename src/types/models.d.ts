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

// State & Store types
type PossibleStores = User & UserData;

type State = {
  user: User
  userData: UserData
};

type PartialState = Partial<State>;
