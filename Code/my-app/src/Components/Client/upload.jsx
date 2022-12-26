import { useState } from "react";

export default function Upload() {
  // const [uploadImage]=useMutation(UPLOAD_Image,{
  //     onCompleted:data=>console.log(data)
  // })
  const [Images,setImages]=useState([])
  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setImages(file)
  //   console.log(Images.name);
  //   if (!file) return;
  // };
  const [images, setAllImages] = useState([]);
  
  
  return (
    <div>
   
        <input type="file"
        name="images" 
        multiple
        onChange={e=>(e.target.value)} 
        />
        
    </div>
  );
}
