// Include the library
import nem from "nem-sdk"

function _downloadList()
{
  // Create an object with parameters
  var endpoint = nem.model.objects.create('endpoint')(nem.model.nodes.defaultTestnet, nem.model.nodes.defaultPort);

  // Create a connector object
  let address = "TBQHMQAN6Y7IFESKDWVMCTLZRZDXMGXJADZF6PW4";
  return new Promise(function(resolve){
    nem.com.requests.account.transactions.outgoing(endpoint, address).then(promise => {
    // console.log(promise.data)
    let m = promise.data
    // console.log(m)


    var kv_list = {};
    for (let i in m)
    {
      var msg = m[i].transaction.message;
      // Format msg
      var fmt = nem.utils.format.hexMessage(msg);
      try {
        var kv = JSON.parse(fmt);
        for (let key in kv)
        {
          kv_list[key] = kv[key];
          // console.log(kv_list);
        }
      }catch(e) {}

    }
    resolve(kv_list);

    // console.log(kv_list);
    // return kv_list;
  })
  })

}  

async function downloadList()
{
  var kv_list = await _downloadList();
  var booklist = []
  for(var property1 in kv_list) {
    let newItem = {}
    newItem.ISBN = property1
    newItem.contentID = kv_list[property1]
    booklist.push(newItem)
  }
  return booklist
}

export default downloadList;