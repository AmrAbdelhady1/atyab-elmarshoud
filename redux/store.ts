import { configureStore } from '@reduxjs/toolkit';
import { CartReducer } from './reducers/cartReducer';

const store = configureStore({
	reducer: {
		CartReducer,
	},
});

export default store;
export type AppDispatch = typeof store.dispatch;
