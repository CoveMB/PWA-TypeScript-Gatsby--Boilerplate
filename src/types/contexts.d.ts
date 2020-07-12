// AuthContext ///
// State
type AuthContextState = {
  user: User,
  isAuthenticated: boolean,
  authToken: Token,
};

// Functions
type Login = ({ user, token }: {user: User, token: Token}) => void;

type SetToken = ({ user, token }: {user: User, token: Token}) => void;

type UnsetToken = () => void;

type LogOut = (
  { tokenToRevoke, logOutUser, authToken }:
  { tokenToRevoke?: Token.token, logOutUser?: boolean, authToken?: Token.token }
) => Promise<void>;

// Context
interface AuthContext extends AuthContextState {
  logIn: Login
  logOut: LogOut
}
