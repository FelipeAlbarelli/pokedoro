import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

// REMOVE_EXPENSE

test('should set default state', () =>{
    const state = expensesReducer(undefined , {type : '@@INIT'});
    expect(state).toEqual([])
})

test('should remove expense by id' , () =>{
    const state = expensesReducer(expenses , {type : 'REMOVE_EXPENSE' , id : expenses[0].id})
    expect(state).toEqual([expenses[1] , expenses[2] , expenses[3]])
})

test('should not remove expense if id npt found' , () =>{
    const state = expensesReducer(expenses , {type : 'REMOVE_EXPENSE' , id : 'impossible id'})
    expect(state).toEqual(expenses)
})

// should add an expense

test('should add a expense' , () =>{
    const newExpense = {
        description : 'bola de gude',
        note : 'some note',
        amount : 123456,
        createdAt : 9999,
        id : '123456'
    }
    const state = expensesReducer([] , {type : 'ADD_EXPENSE' , expense : newExpense});
    expect(state).toEqual([ newExpense])
})

test('should edit a expense by id' , () =>{
    const updates = {
        description : 'new description',
        note : 'new note',
        amount : 987654321,
        createdAt : 123123,
    }
    const [ e0 , e1 , e2 , e3] = expenses;
    const action = {
        type : 'EDIT_EXPENSE',
        id : e0.id,
        updates
    }
    const state = expensesReducer(expenses , action)
    expect(state[0]).toEqual({...e0 , ...updates})
})

test('should not edit expense if id not found' , () =>{
    const updates = {
        description : 'new description',
        note : 'new note',
        amount : 987654321,
        createdAt : 123123,
    }
    const state = expensesReducer(expenses , {
        type : "EDIT_EXPENSE",
        id : 'impossible id',
        updates
    });
    expect(state).toEqual(expenses)
})