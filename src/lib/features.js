import moment from "moment";

const fileFormat = (url="") => {

    const filExt = url.split(".").pop();

    if(filExt === "mp4"||filExt === "webm"||filExt === "ogg") 
       return "video";

    if(filExt === "mp3"||filExt === "wav") 
       return "audio";

    if(filExt === "png"||filExt === "jpg"||filExt === "jpeg"||filExt === "gif") 
       return "image";

    return "file";
};

const transformImage = (url = " ", width=100) => url;

const getlast7days = ()=>{
   const  currentDate = moment();
   const last7days = [];
   for (let index = 0; index < 7; index++) {
      const dayDate = currentDate.clone().subtract(index,"days")
      const dayName = dayDate.format("dddd");

      last7days.unshift(dayName);
      
   }
   return last7days;
}

export {fileFormat,transformImage , getlast7days}
