import moment from 'moment';

const expenses = [
    {
        id : "1",
        description : 'manga',
        amount : 100,
        createdAt : moment(0).add(10, 'days').valueOf()
    },
    {
        id : "20",
        description : 'mamao',
        amount : 13,
        createdAt : moment(0).add( 2 , 'days').valueOf()
    },
    {
        id : "40",
        description : 'me',
        amount : 1,
        createdAt : moment(0).add(5 , 'days').valueOf()
    },
    {
        id : "230",
        description : 'fe',
        amount : 900,
        createdAt : moment(0).add(3 , 'days').valueOf()
    }
]

export default expenses