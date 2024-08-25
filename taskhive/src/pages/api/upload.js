import { writeFileSync } from "node:fs";
import { spawn } from "node:child_process";

export default function handler(req, res) {
	const name = req.body["name"];
	const fileData = req.body["zip"];
	const zipName = `repo/${name}/${name}.zip`;
	try {
		writeFileSync(zipName, fileData);
	} catch(e) {
		res.status(500).json({error: "Error"});
	}

	const unzip = spawn('unzip', [zipName]);
	unzip.on('close', (code) => {
		if (code !== 0) {
			res.status(500).json({error: "Couldn't unzip"});
			return;
		}
	});
}
