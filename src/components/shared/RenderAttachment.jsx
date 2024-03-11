import { FileOpen  as FileOpenIcon} from '@mui/icons-material';
import React from 'react'
import { transformImage } from '../../lib/features';

const RenderAttachment = (file,url) => {

    switch(file){
        case "video":
           return <video src={url} preload="none" width={"200px"} controls></video>
            

        case "audio":
            return   <audio src={url} preload="none" controls/>
            

        case "image":
            return  <img src={transformImage(url,200)} alt="attachment" height="160px" objectfit={"contain"} width={"200px"} ></img>
            

        default:
            return  <FileOpenIcon/>
            
    }
}

export default RenderAttachment