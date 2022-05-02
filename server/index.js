#!/usr/bin/env node

import fs from 'fs'
import  http from 'http'
import path, { dirname } from 'path'

const hostname = 'localhost';

const port = 3030;



const server = http.createServer( (req, res) => {



	console.log(req.url)
	res.statusCode = 200;
	console.log(`server running at http://${hostname}:${port}`)
	

	console.log("basename",req.url)			
	if(req.url==="/"){
	
		fs.readFile('index.html', function(err,data){

			if(err) {
				res.writeHead(404);
				res.write('Content you are looking for was not found')
			}
			else {
				res.writeHead(200, 'text/html');
				res.write(data)

			}
			res.end()
		})

	}
	else {
		let dir = path.dirname(req.url)
		console.log("DIRNAME",dir)
		let file;
		if(dir==="scripts")  {file = "scripts/"+path.basename(req.url)}
		if(dir==="src") {file = "src/"+path.basename(req.url)}
		console.log("FILe", file,dir)

		fs.readFile(file,function(err,data){


			if(err) {
			console.log("this is my error",err.message)	
			res.writeHead(200, {'Content-type':'text/javascript'})
			res.write(`${file} not there`)
			res.end()
		 }
		
		else {
			res.writeHead(200, {'Content-type':'text/javascript'})
			res.write(data)
			res.end()
		}

		})
	}
	

}


)

server.listen(port, hostname)










