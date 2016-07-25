## stream
```
var rs = fs.createReadStream('./2.txt');//再说一次 这个是buffer
rs.setEncoding('utf8');
/*这是第二种
var rs = fs.createReadStream('./2.txt', 'utf8');*/
rs.on('data', function (data) {
    console.log(data)
});//<Buffer e5 b0 8f e7 ba a2>
//在不设置utf8的时候
//1:是通过字符传 不需要解码
var s=''
 //事件是异步的
 rs.on('data',function(data){//这表明开始读取流
 s+=data
 });
 rs.on('end',function(data){
 console.log(s);
 });
 //2:通过Fs.readFileSync()需要设置成utf8读到的是buffer
 /*console.log(fs.readFileSync('./2.txt','utf8'))*/
 //字符串是不是可以自动转换成utf8；
 /*var result=[];
  rs.on('data',function(data){
  result.push(data)
  })
  rs.on('end',function(){
  console.log(Buffer.concat(result).toString())
  });*/
```