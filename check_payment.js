const Web3 = require('web3');
const ws = "wss://ropsten.infura.io/ws";
const web3 = new Web3(ws);
web3.eth.subscribe("pendingTransactions", function(error, result) {
    if(!error) {
        var shop_wallet = "0xcd123242cb1e97240fb8f956bcb32f7cd10741d2"
        web3.eth.getTransaction(result)
            .then(function (transaction) {
               if(transaction !== null && transaction.to) {
                   var ether = web3.utils.fromWei(transaction.value, 'ether')
                   if((transaction.to).toLocaleLowerCase() === shop_wallet && ether.toString() === '0.5') {
                   console.log(`from: ${transaction.from} amount: ${web3.utils.fromWei(transaction.value, 'ether')}`)
                   }
               }
        });
    }
});