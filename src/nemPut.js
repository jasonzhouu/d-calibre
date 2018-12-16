import nem from "nem-sdk"

function updateBook(key, value)
{
  // 建立json数据
  var data = {}
  data[key] = value;
  // var data = {key:value};
  var str_data = JSON.stringify(data);

  // Get an empty object
  var common = nem.model.objects.create('common')('HelloWorld', 'a54443deac424823a6b4b9c33fe6919338ef31ab0c42821e4d986075a38ecd1d');
  // Create an object with parameters
  var endpoint = nem.model.objects.create('endpoint')(nem.model.nodes.defaultTestnet, nem.model.nodes.defaultPort);

  // Create an object with parameters
  var transferTransaction = nem.model.objects.create("transferTransaction")("TA65DN4UJ5TE6IIA2ZQ6KAHTK5W3MX6Z5DABJ2YY", 1, str_data);

  // Prepare the above object
  var transactionEntity = nem.model.transactions.prepare("transferTransaction")(common, transferTransaction, nem.model.network.data.testnet.id)

  // nem.model.transactions.send(common, transactionEntity, endpoint).then(window.alert("Success"));
  // setTimeout(
  //   function(){
  //     nem.model.transactions.send(common, transactionEntity, endpoint).then(
  //       promise => {
  //         console.log(promise);
  //       });
  //   },2000);



  nem.com.requests.chain.time(endpoint).then(function (timeStamp) {
    const ts = Math.floor(timeStamp.receiveTimeStamp / 1000);
    transactionEntity.timeStamp = ts;
    const due = 60;
    transactionEntity.deadline = ts + due * 60;
    
    console.log(transactionEntity);
    
    nem.model.transactions.send(common, transactionEntity, endpoint).then(function(res){
      // nem.com.requests.account.transactions.unconfirmed().then(
      //   promise => {
      //     let m = promise.data;
      //     console.log(m);

      // })
        console.log(res);
        }, function(err){
            console.log(err);
        });
        
    }, function (err) {
        console.error(err);
    });



  // document.write(transactionEntity);
}



export default updateBook;