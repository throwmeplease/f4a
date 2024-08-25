import * as formidable from "formidable";
import { readFileSync, rename } from "node:fs";

export const config = {
	api: {
		bodyParser: {
			sizeLimit: '13mb' // Set desired value here
		}
	}
}

export default function handler(req, res) {
	const name = readFileSync("cache")
	var form = new formidable.IncomingForm();
	console.log("Main chalunga shayad")
	form.parse(req, function (err, fields, files) {
		var oldpath = files.filetoupload.filepath;
		console.log(files.filetoupload.filepath);
		var newpath = `./repos/${name}/` + files.filetoupload.originalFilename;
		rename(oldpath, newpath, function (err) {
			if (err) {
				res.status(500).json({error: "Couldn't move"});
				return;
			}
			res.status(200).json({success: true});
			return;
		});
	})
	res.status(200).json({success: false});
}
