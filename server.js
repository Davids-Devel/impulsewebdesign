const express = require('express');
const next = require('next');

const session = require("express-session");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

var sess = {
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {}
};
app.prepare().then(()=>{
	const server = express();

	if (server.get('env') === 'production') {
		server.set('trust proxy', 1); // trust first proxy
		sess.cookie.secure = true; // serve secure cookies
	}
		 
	server.use(session(sess));
	server.use(express.json());

	server
		.get("/", (req, res) => {
			return app.render(req, res, '/', req.query);
		})
		.get("/login",(req, res) => {
			return app.render(req, res, "/login", req.query);
		})
		.post("/auth",(req, res) => {
			let {email, password} = req.body;
			if (email === "djgm1206@gmail.com" && password === "1234") {
				req.session.logged = true;
				req.session.username = "David González";
				req.session.userpic = "/static/UserPic.jpg";
				res.json({
					status:"success"
				});
			} else {
				res.json({
					status:"no-user"
				});
			}
		})
		.get('/register/:type', (req, res) => {
			return app.render(req, res, '/select', { type: req.params.type });
		})
		.get('/my-account/:tab', (req, res) => {
			return app.render(req, res, '/my-account', { tab: req.params.tab });
		})
		.get("/store", (req, res) => {
			let {q} = req.query;
			let data = require("./store.json");

			let products;
			let found = true;
			if (q) {
				let splitSearch = q.toLowerCase().split(" ");
				products = products.filter(e=>{
					let view = false;
					e.tags.forEach(tag=>{
						let newData = tag.toLowerCase().split(" ");
						newData.forEach(splitTag=>{
							splitSearch.forEach( spliteSearchMapped =>{
								if (splitTag === spliteSearchMapped) {
									view = true;
								}
							});
						})
					});
					if (view) return e;
				});
				if (products.length > 0) found = false;
			} else {
				products = data;
				q = "";
			}
			return app.render(req, res, "/store", {search:q, products});
		})
		.get('*', (req, res) => {
			return handle(req, res);
		})
		.listen(port, (err) => {
		  if (err) throw err;
		  console.log(`> Ready on http://localhost:${port}`);
		})
}).catch((err)=>{
	throw err;
})