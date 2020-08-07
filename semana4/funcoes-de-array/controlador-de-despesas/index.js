var expenses = []

function clearAll(){
    const clear_price = document.getElementById("price")
    const clear_type = document.getElementById("type-ctrl")
    const clear_describe = document.getElementById("describe")
    const clear_type_detail = document.getElementById("type-detail")
    const clear_price_min = document.getElementById("price-min") 
    const clear_price_max = document.getElementById("price-max")

    clear_price.value = ""
    clear_type.value = "" 
    clear_describe.value = ""    
    
    clear_type_detail.value = ""
    clear_price_min.value = "" 
    clear_price_max.value = ""  
}

function expenseToHTML(expense){
    const post = document.getElementById("post-expenses")
    post.innerHTML += `<h2>Tipo: ${expense.type}</h2>` + `<h4>Valor: R$${expense.price},00</h2>` +`<p>Descrição: ${expense.message}</p>` 
}

function createExpense(event){

    const price = Number(document.getElementById("price").value)
    const type = document.getElementById("type-ctrl").value
    const message = document.getElementById("describe").value

    if ((price<= 0) || (type === "") ||(message === "")){
        alert("Digite um valor válido!")
    }
    else {               
        const expense = {
            price: price,
            type: type,
            message: message,
        }
        expenses.push(expense)    

        expenseToHTML(expense)     

        // TOTAL PRICE START
        const array_total = expenses.map((each) =>{
            return each.price
        })
        
        let total = 0
        for(let i= 0; i < array_total.length; i++){
            total += array_total[i]
        }

        const get_total = document.getElementById("total")
        get_total.innerText = `Total: R$${total}`
        // TOTAL END START
            
        clearAll()
        return expenses
    }

}

/*
function filterToHTML(filter){
    const post_filter = document.getElementById("post-filter")
    post_filter.innerHTML += `<h2>Tipo: ${filter.type}</h2>` + `<h4>Valor: R$${filter.price},00</h2>` +`<p>Descrição: ${filter.message}</p>` 
}
*/
function filterType(event){
    const expenses_array = expenses

    const type_detail = document.getElementById("type-detail").value
    const price_min = Number(document.getElementById("price-min").value)  
    const price_max = Number(document.getElementById("price-max").value)
    
    var filter = expenses_array.filter((each) => {
        if ((price_min == "") && (price_max !== "")){
            if((each.price < price_max) && (each.type === type_detail)){
                return true
            }
        }
        else if ((price_min !== "") && (price_max == "")){
            if((each.price > price_min)&& (each.type === type_detail)){
                return true
            }
        }
        else{
            if((each.price > price_min) && (each.price < price_max) && (each.type === type_detail)){
                return true
            }
        }
    })
    filterToHTML(filter)    
    console.log(filter)
    clearAll()
}



