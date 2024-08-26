import * as formidable from "formidable";
import { readFileSync, rename } from "node:fs";

export const config = {
	api: {
		bodyParser: false,
	}
}

export default function handler(req, res) {
	const name = readFileSync("cache")
	var form = new formidable.IncomingForm();
	form.uploadDir = `./repos/${name}`;
	form.keepExtensions = true;
	//console.log("Main chalunga shayad")
	form.parse(req, function (err, fields, files) {
		var oldpath = files.filetoupload[0].filepath;
		var newpath = `./repos/${name}/` + files.filetoupload[0].originalFilename;
		rename(oldpath, newpath, function (err) {
			if (err) {
				res.status(500).json({error: "Couldn't move"});
				return;
			}
			res.status(200).json({success: true});
			return;
		});
	})
	res.status(200).json({success: "File Uploaded"});
}
