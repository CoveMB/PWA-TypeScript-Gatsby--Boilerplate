// AuthContext ///
// State
type AuthContextState = {
  user: User,
  isAuthenticated: boolean,
  authToken: AuthToken,
};

// Functions
type Login = ({ user, token }: {user: User, token: AuthToken}) => void;

type SetToken = ({ user, token }: {user: User, token: AuthToken}) => void;

type UnsetToken = () => void;

type LogOut = (
  { tokenToRevoke, logOutUser, authToken }:
  { tokenToRevoke?: string, logOutUser?: boolean, authToken?: string }
) => Promise<void>;

// AuthContext
type AuthContext = AuthContextState & {
  logIn: Login
  logOut: LogOut
};
