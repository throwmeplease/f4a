import { createUploadthing} from "uploadthing/next-legacy";
//import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
	// Define as many FileRoutes as you like, each with a unique routeSlug
	imageUploader: f({ image: { maxFileSize: "4MB" } })
	// Set permissions and file types for this FileRoute
	.middleware(async ({ req, res }) => {
		return {userId: "test"};
	})
	.onUploadComplete(async ({ metadata, file }) => {
		// This code RUNS ON YOUR SERVER after upload
		console.log("Upload complete for userId:", metadata.userId);

		console.log("file url", file.url);

		// !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
		return { uploadedBy: metadata.userId };
	}),
}

