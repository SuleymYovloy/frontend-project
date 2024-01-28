import { StoreProvider } from 'app/providers/StoreProvider/ui/StoreProvider';
import type { StateSchema, ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { createReduxStore, AppDispatch } from './config/store';

export type {
    AppDispatch,
};

export {
    StoreProvider, createReduxStore, StateSchema, ThunkConfig,
};
