import {readdirSync} from "node:fs";

export default function handler(req, res) {
	const name = req.body["name"];
	res.status(200).json({repos: readdirSync(`repos/${name}`)});
}
