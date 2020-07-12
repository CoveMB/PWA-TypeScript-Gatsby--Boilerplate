import { ConfigStore, Actions } from 'types';
import { initStore } from './useStore';

// Configure here actions for user store
const configureUserStore: ConfigStore = () => {

  const actions: Actions<User> = {
    SET_USER: (currentState, user) => ({
      ...currentState, user: { ...user }
    }),
  };

  // Configure here initial state for the store
  initStore(actions, { user: {} });

};

export { configureUserStore };
