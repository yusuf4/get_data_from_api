const url = "https://api.npoint.io/7c75bbb01a4b71a8b983"
const getData=document.querySelector('#getdata')
const send = document.querySelector('#carname')
getData.addEventListener('input', getInfo)
let result
async function getInfo(){
    let dt = this.value
    result = dt
    //send.value = dt
    let response = await fetch(`${url}`)
    let json = await response.json()
    for (let i=0; i<json.length; i++){
        let userID=json[i]['user_id']
        if (userID==dt){
            document.querySelector('#carname').value = json[i]['name']
            document.querySelector('#carcollor').value=json[i]['collor']
            document.querySelector('#carprice').value=json[i]['price']
        }
    }

}
