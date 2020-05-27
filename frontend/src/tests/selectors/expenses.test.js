import gve from '../../selectors/expenses'
import moment from 'moment'
import expenses from '../fixtures/expenses'

// def test data for the file


test('should filter by text value', () => {
    const filters ={
        text : 'ma',
        sortBy : 'date',
        startDate : undefined,
        endDate : undefined
    };
    const result = gve(expenses , filters);
    expect(result).toEqual([expenses[0] , expenses[1]])
})

test('should filter by text value', () => {
    const filters ={
        text : 'm',
        sortBy : 'date',
        startDate : undefined,
        endDate : undefined
    };
    const result = gve(expenses , filters);
    expect(result).toEqual([expenses[0] , expenses[2] , expenses[1]])
})

test('should filter by startDate' , () =>{
    const filters = {
        text : "",
        sortBy : 'date',
        startDate : moment(0).add(4 , 'days').valueOf(),
        endDate : undefined
    };
    const result = gve(expenses , filters);
    expect(result).toEqual([expenses[0] , expenses[2]])
})

test('should filter by endDate' , () =>{
    const filters = {
        text : '',
        sortBy : 'date',
        startDate : undefined,
        endDate : moment(0).add(4 , 'days').valueOf()
    }
    const result = gve(expenses , filters);
    expect(result).toEqual([expenses[3] , expenses[1]])
})

test('should sort by date' , () =>{
    const filters = {
        text : '',
        sortBy : 'date',
        startDate : undefined,
        endDate : undefined
    };
    const result = gve(expenses , filters);
    expect(result).toEqual([expenses[0] , expenses[2] , expenses[3] , expenses[1]])
})

test('shpuld sort by amount' , () =>{
    const filters = {
        text : '',
        sortBy : 'amount',
        startDate : undefined,
        endDate : undefined
    }
    const result = gve(expenses , filters);
    expect(result).toEqual([expenses[3] , expenses[0] , expenses[1] , expenses[2]])
})