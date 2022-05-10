


window.onload=function(){


const url = "http://localhost:3030"

let display = document.createElement('div')

document.body.append(display)

fetch(url)
.then(res=>{
	let myjson = res.json()
	return myjson
})
.then(json=>{ for (let i in json.results) { 
	console.log("JSON retrieved",json)
	const item =document.createElement('div')
	item.textContent=i["name"]
	item.style.backgroundColor = "gray"
	item.style.width = "200px";
	item.style.color = "white"
	display.append(item)
}
}).catch(err=>{display.innerHTML=err})






}