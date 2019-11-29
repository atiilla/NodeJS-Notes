const proxylist = require('proxylist')

let data = []

function fresh(response) {
    return new Promise(resolve => {
        proxylist.main().then(response)
    })
}

async function getProxy() {
    data = await fresh()
    data.forEach(proxy=>console.log(proxy))
  
}

getProxy()
