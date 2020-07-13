type PossibleAuthActions = 'login' | 'signup' | 'passwordReset';

type AuthActions = {
  LOGIN: 'login',
  SIGNUP: 'signup',
  PASSWORD_RESET: 'passwordReset'
};

type UserAuthAction = {
  authModalOpen: boolean, authAction?: PossibleAuthActions
};
