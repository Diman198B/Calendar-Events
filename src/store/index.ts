import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer, applyMiddleware(thunk));

//типизация стора
export type RootState = ReturnType<typeof store.getState>; // достаем состояние, этот тип будет знать о редьюсерах и о данных с кот. работает
export type AppDispatch = typeof store.dispatch;
