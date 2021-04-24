const http= require('http');
const fs=require('fs');
const path=require('path');



const hostname='localhost';
const port=3001;

const server=http.createServer((req,res)=>{
    // console.log(req.headers);

    console.log('request for' +req.url+ 'by method' +req.method);

    if(req.method== 'GET'){
     var fileURL;
     if(req.url=='/'){      //home page i.e index if only written localhost3001
         fileURL="/index.html"   //want to assign to show this
     }else{
         fileURL=req.url;
     }
     var filePath=path.resolve('./public' +fileURL); //makes absolute path
     const fileExt=path.extname(filePath); // to check extension 
     if( fileExt=='.html'){
         fs.exists(filePath,(exists)=>{ //callback func: sb kch hone baad back ye call ho
            if(!exists){
                res.statusCode=404;
                res.setHeader('Content-Type','text/html');
                res.end('<html><body><h1>Error 404 : '+ fileURL + 'doesnot exist' +'</h1></body></html>')


            }

            res.statusCode=200;
            res.setHeader('Content-Type','text/html');
            fs.createReadStream(filePath).pipe(res); //createreadstream converts data into stream of bytes
                                           //pipe provides us response one by one given by crredstrm
                                           //can be wriiten fsreadFile but it is better         
        })
     }  else{

        res.statusCode=404;
        res.setHeader('Content-Type','text/html');
        res.end('<html><body><h1>Error 404 : '+ fileURL + 'not html file' +'</h1></body></html>')
     }  
        

    }else{

        res.statusCode=404;
        res.setHeader('Content-Type','text/html');
        res.end('<html><body><h1>Error 404 : '+ fileURL +'not supported' +'</h1></body></html>')
    }

    // res.statusCode=200;
    // res.setHeader('Content-Type','text/html');
    // res.end('<html><body><h1>Server Connection Success</h1></body></html>')
});

server.listen(port,hostname,()=>{  //to start server

    console.log(`server running at http://${hostname}:${port}`)
})