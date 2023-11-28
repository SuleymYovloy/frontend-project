import { StoreProvider } from 'app/providers/StoreProvider/ui/StoreProvider';
import type { StateSchema, ReducStoreWithManager } from 'app/providers/StoreProvider/config/StateSchema';
import { createReduxStore, AppDispatch } from './config/store';

export {
    StoreProvider, createReduxStore, StateSchema, AppDispatch,
};
