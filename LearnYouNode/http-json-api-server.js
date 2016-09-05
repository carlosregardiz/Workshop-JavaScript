var http = require('http')
var url = require('url')
var http=require('http');
var url=require('url')
var port=process.argv[2];
function parseDatetoISO(query,key)
{
   try
   {
     if (isEmptyObject(query)===true) return null
     else if(getObjProperty(query,key)!=null) return new Date(query.iso).toISOString();
     return null
   }
   catch(ex) { return null }
}
function isKeyInObject(obj,key){
     if (obj.hasOwnProperty(key)) return true
     return false
}
function getObjProperty(obj,key)
{
      if (isKeyInObject(obj,key)===true)
      {
         if (obj[key]!=null)
            return obj[key]
      }
     return null;
}
function unixtime()
{
   var epochTime=new Date();
   return {"unixtime":epochTime.getTime()}
}
function translateISOTime(time)
{
    return {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    }
}
function isEmptyObject(obj)
{
var hasOwnProperty = Object.prototype.hasOwnProperty;
if (obj==null) return true;
if(obj.length>0) return false;
if(obj.length === 0) return true;
for (var key in obj)
{
   if(hasOwnProperty.call(obj,key)) return false;
}

return true;
}
var server=http.createServer(
 function (req,res){
    if(req.method!='GET')
           return res.end('Please send a GET\n')
     var queryString=url.parse(req.url,true)
     var result;
     if (queryString.pathname=='/api/parsetime')
        {
            var key='iso'
            var date=parseDatetoISO(queryString.query,key)
            if (date!=null)
                {
                   var time = new Date(date);
                   result=translateISOTime(time)
                }
            else {
                 res.writeHead(400);
                 return res.end('Please enter a valid date in ISO format  as ?iso=Year-Month-DayTHH:MM:SS.millisecondsZ.\n');
            }
        }
     else if (queryString.pathname=='/api/unixtime')
        {
              result=unixtime();
        }


     if(result)
       {
          res.writeHead(200, {
          'Content-Type': 'application/json' });
          res.end(JSON.stringify(result));
       }
      else
      {
          res.writeHead(404)
          res.end('Not Found')
      }

}
);

server.listen(Number(port));
