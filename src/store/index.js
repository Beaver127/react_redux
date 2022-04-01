import {createStore, combineReducers, applyMiddleware} from "redux";
//импортируем все редьюсеры
import {cashReducer} from "./cashReducer";
import {customerReducer} from "./customerReducer";
//отслеживание через расширение в браузере состояния redux
import {composeWithDevTools} from "redux-devtools-extension";
//так же thunk служит для вызова функции dispatch в файлах где он не импортирован(использование хука вне функционального компонента)
import thunk from "redux-thunk";

//объеденяем все редьюсеры в одно состояние
const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer
})


// export const store = createStore(rootReducer,composeWithDevTools())
//подключаем мидвер для асинхронных задач с redux
//так же thunk служит для вызова функции dispatch в файлах где он не импортирован
export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))