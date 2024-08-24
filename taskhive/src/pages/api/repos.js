import {readdirSync} from "node:fs";

export default function handler(req, res) {
	const name = req.body["name"];
	let arr = [];
	readdirSync(`repos/${name}`).forEach((v) => {
		arr.push({value: v, label: v});
	});
	res.status(200).json({repos: arr});
}
