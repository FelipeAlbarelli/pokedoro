
const getVisibleExpenses = (expenses , {text = '' , sortBy = 'date' , startDate = -Infinity , endDate = Infinity}) => {
    return expenses.filter( (expense) =>  {
        const startDateM = expense.createdAt >= startDate;
        const endDateM   = expense.createdAt <= endDate;
        const textM      = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateM && endDateM &&  textM
    }).sort( (a,b) => {
        if (sortBy == "date"){
            return a.createdAt < b.createdAt ? 1 : -1
        } else {
            return a.amount < b.amount ? 1 : -1
        }
    } )
}

export default getVisibleExpenses