window.addEventListener("load", function() {
    if (typeof web3 !== "undefined") {
      window.web3 = new Web3(web3.currentProvider);
    } else {
      window.web3 = new Web3(
        new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/ad5e99c0b4274a698702b461b57a7f09")
      );
    }
    document.querySelector("#transfer").addEventListener('click',function() {
      var toAddress = '0xcd123242cb1e97240fb8f956bcb32f7cd10741d2'
      var ethAmount = 0.5
      web3.eth.sendTransaction({
          from: web3.eth.accounts[0],
          to: toAddress,
          value: web3.toWei(ethAmount, 'ether')
      }, function (error, result) {
          if (error) {
             console.log(error)
          } else { 
              document.getElementById('transaction').href = "https://ropsten.etherscan.io/tx/" + result 
              document.getElementById('transaction').innerHTML = "https://ropsten.etherscan.io/tx/" + result 
          }
      });
    })
  });
