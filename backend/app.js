export function processOrder(data){

    const paymentInfo=processPayment(data.amount)

    return paymentInfo;

}


function processPayment(amount){

    //API call to payment gateway

    console.log(" i am original ")
    return {id:123,amount:amount}

}