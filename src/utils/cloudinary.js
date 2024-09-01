import {v2 as cloudinary} from "cloudinary";
import fs from 'fs'

// import { v2 as cloudinary } from 'cloudinary';
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    
    const uploadOnCLoudinary = async(localFilePath) => {
      try{
        if(!localFilePath)return null;
        const response = await cloudinary.uploader.upload(localFilePath,{resource_type :"auto"})
        console.log("file is uploaded on cloudinary", response.url);
        return response;
      } catch(error){
        fs.unlinkSync(localFilePath)//remove the locally saved temp file as the 
        //upload operation got failed 
        return null;
      }
    }
// Upload an image
     const uploadResult = await cloudinary.uploader
       .upload(
           'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
               public_id: 'shoes',
           }
       )
       .catch((error) => {
        fs.unlinkSync(localFilePath) 
           console.log(error);

       });
    
    console.log(uploadResult);