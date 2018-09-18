const PythonShell = require('python-shell');
const router = require('express').Router();
const save = require('save-file');

router.post('/', (req,res)=>{

	console.log(req.headers.key);
	console.log(req.body);	

	save(req.body.file, req.headers.key, (err,data)=>{
		if(err) throw er;
	}).then(()=>{
		let pyshell = new PythonShell.PythonShell('/home/nicolasrg/work/routes/'+req.headers.key);
		pyshell.on('message', function(message){
		console.log(message, "m");
		res.write(message+"\n");
		});

		pyshell.end(function(err, code, signal){
		 if (err){ res.write(err +""+ code);
			//throw err;
		}
  		console.log('The exit code was: ' + code);
  		console.log('The exit signal was: ' + signal);
  		console.log('finished');
  		console.log('finished');
		res.end("end");
		})
	});


});
module.exports = router;
