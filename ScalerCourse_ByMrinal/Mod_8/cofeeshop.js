function placeorder(drink){
    return new Promise(function(res,rej){
        if (drink == 'coffee'){
            res('Order is placed')
        }
        else{
            rej('Order cannot be placed')
        }
    })
}
function processOrder(order){
    return new Promise(function(res){
        console.log('Order is being processed')
        res(`${order} is Served`)
    })
}

placeorder('coffee').then(function(res){
    console.log(res)
    let orderIsProcessed = processOrder(res)
    return orderIsProcessed
}).then(function(res){
    console.log(res)
}).catch(function(err){
    console.log(err)
})

// ASYNC AWAIT
console.log("ASYNC AWAIT")
async function serveOrder(){
    try{
        let orderPlaced =  placeorder('coffee')
        console.log(orderPlaced)
        let processedorder = await processOrder(orderPlaced)
        console.log(processedorder)
    }
    catch(err){
        console.log(error)
    }

}
serveOrder()