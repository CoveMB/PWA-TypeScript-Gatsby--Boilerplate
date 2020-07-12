import { Dispatch } from 'react';

type Action = (globalState: State, payload: M) => State;
type Actions<M> = Record<string, Action >;

type Listener = Dispatch[];

type State = {
  user?: User
  userData? : UserData
};

type UseStore = (shouldListen = true) => [State, Dispatch];

type InitStore = (storeActions: Actions, initialSate: State) => void;

type ConfigStore = () => void;
