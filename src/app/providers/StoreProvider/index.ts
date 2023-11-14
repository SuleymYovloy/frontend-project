import { StoreProvider } from 'app/providers/StoreProvider/ui/StoreProvider';
import type { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { createReduxStore } from './config/store';

export { StoreProvider, createReduxStore, StateSchema };
