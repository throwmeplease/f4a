import {readdirSync, existsSync, mkdirSync} from "node:fs";

export default function handler(req, res) {
	const name = req.body["name"];
	const path = `repos/${name}`;
	let arr = [];
	if (existsSync(path)) {
		readdirSync(path).forEach((v) => {
			arr.push({value: v, label: v});
		});
	} else {
		mkdirSync(path, {
			recursive: true,
			mode: 0o666,
		});
	}
	res.status(200).json({repos: arr});
}
