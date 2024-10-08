import * as csv from "csv/sync";
import * as fs from "node:fs";

function writeToFile(res, name, content, sucMsg, errMsg) {
	try {
		fs.appendFileSync("credentials.csv", content);
		fs.writeFileSync("cache", name);
		fs.mkdirSync(`./repos/${name}`, {recursive: true});
		res.status(200).json({success: sucMsg});
	} catch (err) {
		res.status(500).json({error: errMsg});
	}
}

export default function handler(req, res) {
	const name = req.body["name"];
	const passwd = req.body["password"];
	const content = `${name},${passwd}\n`;
	if (name !== undefined && passwd !== undefined) {
		try {
			const data = fs.readFileSync("credentials.csv", { encoding: 'utf8' });
			const records = csv.parse(data, {
				columns: false,
				skip_empty_lines: true,
			});
			for (let i = 0; i < records.length; i++) {
				const e = records[i];
				if (name === e[0] && passwd === e[1]) {
					fs.writeFileSync("cache", name);
					res.status(200).json({success: "User exists"});
					return;
				} else if (name === e[0] && passwd !== e[1]) {
					res.status(401).json({error: "Wrong password"});
					return;
				}
			}
			writeToFile(res, name, content, "New User added", "Couldn't write to file");
		} catch (err) {
			writeToFile(res, name, content, "New User added", "Couldn't write to file");
		}
	}
}
