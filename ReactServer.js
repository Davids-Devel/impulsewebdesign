const App = require("express")();

App
	.get("/react",(req, res)=>{
		res.sendFile(__dirname+"/node_modules/react/umd/react.development.js");
	})
	.get("/react-dom",(req, res)=>{
		res.sendFile(__dirname+"/node_modules/react-dom/umd/react-dom.development.js");
	})
.listen(7000,()=>console.log("Listen"));