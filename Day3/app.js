var http = require('http')
var fs = require('fs')

http.createServer(function(req, res){
	
	if(req.url==='/login')
	{
		res.writeHead(200, {'content-type': "text/html"})
		var html = fs.readFileSync('login.html')

  		res.write(html)
	}
	else if(req.url==='/signup'){
		res.writeHead(200, {'content-type': "text/html"})
		var html=fs.readFileSync('signup.html')

		res.write(html)
	}
	else if(req.url==='/home' && req.method==='Get' ){
		res.writeHead(201, {'content-type': "text/html"})
		var html=fs.readFileSync('home.html')
		res.write(html)
	}
	else if (req.url==='/profile'){
		res.writeHead(201, {'content-type': "text/html"})
		var html=fs.readFileSync('profile.html')
		res.write(html)
	}
	else
		{
			res.writeHead(404)
  			res.write('error page not found!')
	}
		res.end()
}).listen(3000)
