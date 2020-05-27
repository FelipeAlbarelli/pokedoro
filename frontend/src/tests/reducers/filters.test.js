import filtersReducer from '../../reducers/filters';

test('should setup' , () => {
    const state = filtersReducer(undefined , { type : '@@INIT'});
    expect(state).toEqual({
        text : "",
        sortBy : "date",
        startDate : undefined,
        endDate : undefined
    })
})

test('should setup sortBy to amount' , () =>{
    const state = filtersReducer(undefined , {type : 'SORT_BY_AMOUNT'});
    expect(state).toEqual({
        text : "",
        sortBy : "amount",
        startDate : undefined,
        endDate : undefined
    })
})

test('should setup sortBy to date' , () =>{
    const state = filtersReducer({
        text : '',
        sortBy : 'amount',
        startDate : undefined,
        endDate : undefined
    } , {type: "SORT_BY_DATE"});
    expect(state).toEqual({
        text : '',
        sortBy : 'date',
        startDate : undefined,
        endDate : undefined
    })
})

test('should setup textFilter' , () => {
    const state = filtersReducer(undefined , {type : "SET_TEXT_FILTER" , text : "some str"});
    expect(state).toEqual({
        text : "some str",
        sortBy : 'date',
        startDate : undefined,
        endDate : undefined
    })
})