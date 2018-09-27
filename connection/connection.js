const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drive',{useNewUrlParser:true})
.then(()=>{
	console.log('connected to database')
})
.catch((err)=>{
	console.log(err.message)
})

