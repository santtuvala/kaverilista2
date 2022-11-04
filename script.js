var list=[]
var inp = document.getElementById("inp")
var nimilista = document.getElementById("nimilista")

document.getElementById("btn").addEventListener("click",function(){
    list.push(inp.value)
    inp.value=""
    showList()
})

document.getElementById("btn1").addEventListener("click",function(){
    list.sort()
    showList()
})

function showList(){
    nimilista.innerHTML=""
    list.forEach(function(n,i){
        nimilista.innerHTML += "<li>"+n+"<a onclick='deleteItem("+i+")'>&times;</a></li>"
    })
}

function deleteItem(i){
    list.splice(i,1)
    showList()
}
