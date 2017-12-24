var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

export const server = http.createServer(function (req: any, res: any) 
{
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err: any, fields: any, files: any) {
      var oldpath = files.filetoupload.path;
      var newpath = oldpath + files.filetoupload.name;

      // // https://stackoverflow.com/questions/37153666/error-exdev-cross-device-link-not-permitted-rename-tmp-on-ubuntu-16-04-lts
      fs.rename(oldpath, newpath, function (err: any) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
  });
} else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8888);