import {addManyCustomersAction} from "../store/customerReducer";

export const fetchCustomers = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            //используем хук dispath в проосто файле (thunk)
            .then(json => dispatch(addManyCustomersAction(json)))
    }
}