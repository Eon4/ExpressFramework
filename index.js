import http from 'http';
import  express  from 'express';
import dotenv from 'dotenv';
import db from './db.config.js'

const app = express()


app.get("/api", (req, res) => {
db.query(`SELECT id,title FROM song`, (error, result) => {
	if(error) {
		console.error(error);
	} else {
        res.json(result);
	}
  });
});


dotenv.config();


app.listen(process.env.PORT, () => {
    console.log("Server is working, Server started on port:" + process.env.PORT);
});

app.use((req, res) => {
    res.status(404).send("Page not found")
})