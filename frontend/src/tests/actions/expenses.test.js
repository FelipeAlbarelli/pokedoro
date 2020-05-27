import {addExpense , removeExpense , editExpense} from '../../actions/expenses'

test('should setup remove action object' , () => {
    const action = removeExpense({id : "123abc"});
    expect(action).toEqual({
        type : 'REMOVE_EXPENSE',
        id : '123abc'
    })
})

test('should setup edit action object' , () => {
    const action = editExpense({id : '123' , updates : {
        description : 'd',
        note : 'n',
        amount : '23',
        createdAt : 1000
    }})
    expect(action).toEqual({
        type : "EDIT_EXPENSE",
        id : '123',
        updates : {
            description : 'd',
            note : 'n',
            amount : '23',
            createdAt : 1000
        }
    })
})

test('should setup edit action object' , () => {
    const action = editExpense({id : '123' , updates : {
        description : 'd',
        note : 'n',
        amount : '23'
    }})
    expect(action).toEqual({
        type : "EDIT_EXPENSE",
        id : '123',
        updates : {
            description : 'd',
            note : 'n',
            amount : '23'
        }
    })
})


test('should setup edit action object' , () => {
    const action = editExpense({id : '123' , updates : {}})
    expect(action).toEqual({
        type : "EDIT_EXPENSE",
        id : '123',
        updates : {}
    })
})

test('should setup add expense action with default values' , () =>{
    const action = addExpense();
    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense : {        
            description : "",
            note : "",
            amount : 0,
            createdAt : 0,
            id : expect.any(String)
        }
    })
})

test('should setup add expense action with given values' , () =>{
    const givenExpense = {
        description : 'some desc',
        note : 'some note',
        amount : 123123,
        createdAt : 9
    }
    const action = addExpense(givenExpense);

    expect(action).toEqual({
        type : "ADD_EXPENSE",
        expense : {
            ...givenExpense,
            id : expect.any(String)
        }
    })
})