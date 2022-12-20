import React from 'react'

export default function Upload() {
  return (
    <div>
<form action="/profile" method="post" enctype="multipart/form-data">
  <input type="file" name="avatar" />
</form>
    </div>
  )
}
