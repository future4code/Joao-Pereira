let expenses = []
let total = 0

function createExpense(event){
    const price = Number(document.getElementById("price").value)
    const type = document.getElementById("type").value
    const message = document.getElementById("describe").value
    const expense = {
        price: price,
        type: type,
        message: message,
    }
    expenses.push(expense)
    console.log(expenses)
  

}

