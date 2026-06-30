const http=require('http'),fs=require('fs'),path=require('path');
const root=__dirname, port=8078;
const types={'.html':'text/html','.png':'image/png','.js':'text/javascript','.css':'text/css'};
http.createServer((req,res)=>{
  let p=decodeURIComponent(req.url.split('?')[0]);
  if(p==='/')p='/index.html';
  const fp=path.join(root,p);
  if(!fp.startsWith(root)){res.writeHead(403);return res.end('no');}
  fs.readFile(fp,(e,d)=>{
    if(e){res.writeHead(404);return res.end('not found');}
    res.writeHead(200,{'Content-Type':types[path.extname(fp)]||'application/octet-stream'});
    res.end(d);
  });
}).listen(port,()=>console.log('serving on http://localhost:'+port));
