//так нужно писать код
const defaultState = {
    customers: []
}

//константы для того чтобы не ошибиться в вызове нужного действия
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS"
const ADD_CUSTOMER = "ADD_CUSTOMER"
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER"


export const customerReducer = (state = defaultState, action) => {
    //в зависимости от action.type выполняем определённую работу с состоянием
    switch (action.type) {
        case ADD_MANY_CUSTOMERS:
            return {...state, customers: [...state.customers, ...action.payload]}
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]}
        case REMOVE_CUSTOMER:
            return {...state, customers: state.customers.filter(c => c.id !== action.payload)}
        default:
            return state
    }
}


//функции для возврата значений
export const addCustomAction = (payload) => ({type: ADD_CUSTOMER, payload})
export const addManyCustomersAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})
export const removeCustomAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})