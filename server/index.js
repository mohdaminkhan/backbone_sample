#!/usr/bin/env node
import fs from 'fs'
import path,{dirname} from 'path'
import http from 'http'
import {doSomething} from './utils.js'
import {Transform} from 'stream';
import { setDefaultResultOrder } from 'dns';



const filedir = path.dirname(import.meta.url)
const filepath = path.join(filedir,'test.txt')




console.log(filepath,process.platform)
const transformStream = new Transform();


transformStream._transform=(chunk,encoding,callback)=>{

 console.log("chunk -->",chunk)
// console.log(chunk.toString('hex')+"\n")
transformStream.push(chunk)
callback()

}
const server = http.createServer((req,res)=>{




let stream = fs.createReadStream('server/users.json','utf-8')


res.writeHead(200, {'Content-type':'application/json','Access-Control-Allow-Origin':'*'})


stream.pipe(transformStream).pipe(res)

stream.on('end',()=>{transformStream.destroy()})

stream.destroy()

})


server.listen(3030, 'localhost', ()=>{

console.log("server started....")
	
})
// console.log("dirname", dirname(import.meta.url))

// doSomething() 