
'use client'
import * as React from 'react';
import { useEdgeStore } from '@/lib/edgestore';
import { createClient } from '@supabase/supabase-js';
import { Button } from '@/components/ui/button';
import { insertImageDetails } from '@/actions/insertimagedetails';
import { useRouter } from 'next/navigation';


export default function Upload() {
  const [file, setFile] = React.useState<File>();
  const [isDisabled, setIsDisabled] = React.useState(false)
  const { edgestore } = useEdgeStore(); 
  const [title, setTitle] = React.useState("")
  const [description, setDescription] = React.useState("")
  const router = useRouter()
  return (
    <>
    <div>
        <form >
        <input type='text' placeholder='Enter title' onChange={(event)=>{
            setTitle(event.target.value)
        }} required/>
        <input type='text' placeholder='Enter description' onChange={(event)=>{
            setDescription(event.target.value)
        }} required/>
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files?.[0]);
        }}
      required/>
      <Button  disabled={isDisabled}
        onClick={async (e) => {
          e.preventDefault()
          if (file) {
            const res = await edgestore.publicFiles.upload({
              file,
              onProgressChange: (progress) => {
                setIsDisabled(true)
              },
            });

            insertImageDetails(title,description,res.url)
            router.push("/admin/manage")
            setIsDisabled(false)

          }
        }}
      >
        Upload
      </Button>
      </form>
    </div>
    </>
  );
}
    