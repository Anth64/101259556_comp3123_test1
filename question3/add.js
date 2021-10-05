var fs = require('fs');
const log_dir = './logs/';

if(!fs.existsSync(log_dir))
{
	fs.mkdirSync(log_dir);
	process.chdir(log_dir);
	for(let i = 0; i < 10; i++)
	{
		file_name = `log${i}.txt`;
		fs.writeFile(`${file_name}`, '', function (err) {
  		if (err) return console.log(err);
		});
		console.log(file_name);
	}
}

