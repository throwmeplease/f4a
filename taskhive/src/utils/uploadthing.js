import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";
 
import { OurFileRouter } from "/src/server/uploadthing";
 
export const UploadButton = generateUploadButton();
export const UploadDropzone = generateUploadDropzone();
