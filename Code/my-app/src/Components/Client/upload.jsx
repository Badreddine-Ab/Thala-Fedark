import { useMutation } from "@apollo/client"
import { handleError } from "@apollo/client/link/http/parseAndCheckHttpResponse"

export default function Upload() {
    // const [uploadImage]=useMutation(UPLOAD_Image,{
    //     onCompleted:data=>console.log(data)
    // })
    const handleFileChange=e=>{
const file=e.target.files[0]
console.log(file);
if(!file) return 
// uploadImage({variables:{file}})
    }
  return (
    <div>
<form action="/profile" method="post" >
  <input type="file" onChange={handleFileChange} />
</form>
    </div>
  )
}
