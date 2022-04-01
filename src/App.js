import './App.css';
//хук редакса для управления состоянием - useDispatch
//хук редакса для получения состояния - useSelector
import {useDispatch, useSelector} from "react-redux";
//функции которые возвращают название type(что будем делать) и передаваемый объект для перезаписи состояния
import {addCustomAction, removeCustomAction} from "./store/customerReducer";
import {fetchCustomers} from "./asyncAction/customers";


function App() {

    //изменить состояние
    const dispatch = useDispatch()
    //динамически изменяемые значения
    //получние состояния
    //state - общее состояние
    //cash - редьюсер
    //cash - переменная редьюсера
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)


    const getCash = (cash) => {
        //указываем тип и передаем объект
        dispatch({type: "GET_CASH", payload: cash})
    }

    const addCash = (cash) => {
        dispatch({type: "ADD_CASH", payload: cash})
    }

    const addCustomer = (name) => {
        //создаем объект
        const customer = {
            id: Date.now(),
            name: name
        }
        //перезапись состояние с помощью вызова функции которая возвращает type and payload
        dispatch(addCustomAction(customer))
    }
    const removeCustomer = (customer) => {
        dispatch(removeCustomAction(customer.id))
    }

  return (
    <div className="App">
        <p>cash: {cash}</p>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        <hr/>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        {/*удаляем последний элемент из списка */}
        <button onClick={() => customers.length !== 0 ? removeCustomer(customers[customers.length-1]) : ""}>Удалить клиента</button>
        {/*делаем асинхронный запрос к бд*/}
        <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из бд</button>

        <div>
            {customers.length !== 0 ?
                <div>
                    {customers.map(customer => (
                        <div onClick={() => removeCustomer(customer)} key={customer.id}>{customer.name}</div>
                    ))}

                </div>
                :
                <div>Клиенты отсутствуют</div>
            }
        </div>
    </div>
  );
}

export default App;

