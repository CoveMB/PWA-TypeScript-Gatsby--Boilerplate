// Actions
type Action<M> = (globalState: PartialState, payload: M) => PartialState;

type Actions<M> = Record<string, Action<M> >;

type PossibleActions = ModelsActions[keyof ModelsActions];

type Listener = Dispatch[];

// Store
type PossibleStores = State[keyof State];

type PartialState = Partial<State>;

type StoreDispatch = (actionIdentifier: PossibleActions, payload?: PossibleStores) => void;

type UseStore = (shouldListen = true) => [State, StoreDispatch];

type InitStore = (storeActions: Actions, initialSate: PartialState) => void;

type ConfigStore = () => void;
