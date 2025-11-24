const data = [
    {name : "abu" , email:"abu@gmail.com" ,age : 22 , Gender:"male"},
    {name : "fou" , email:"fou@gmail.com" ,age : 23 , Gender:"male"},
    {name : "abi" , email:"abi@gmail.com" ,age : 18 , Gender:"male"},
    {name : "kiyu" , email:"kiyu@gmail.com" ,age : 55 , Gender:"female"},
    {name : "gofu" , email:"gofu@gmail.com" ,age : 19 , Gender:"male"},
    {name : "maki" , email:"maki@gmail.com" ,age : 20 , Gender:"female"},
]

const tbody = document.getElementById('tbody')

data.forEach(a=>{
    const tr = document.createElement("tr")
    tr.innerHTML=`
    <td style="text-align: center;">${a.no}</td>
    <td>${a.name}</td>
    <td>${a.email}</td>
    <td>${a.age}</td>
    <td>${a.Gender}</td>

    `
    tbody.appendChild(tr)
})
