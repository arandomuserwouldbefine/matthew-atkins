
'use client'
import * as React from 'react';
import { useEdgeStore } from '@/lib/edgestore';
import { createClient } from '@supabase/supabase-js';
import { Button } from '@/components/ui/button';
import { insertImageDetails } from '@/actions/insertimagedetails';
import { useRouter } from 'next/navigation';
import {CircularProgress} from "@nextui-org/react";


export default function Upload() {
  const [file, setFile] = React.useState<File>();
  const [isDisabled, setIsDisabled] = React.useState(false)
  const { edgestore } = useEdgeStore(); 
  const [title, setTitle] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [value, setValue] = React.useState(0);

  const router = useRouter()


  return (
    <>
    <div>
        <form >
        <input type='text' placeholder='Enter title' onChange={(event)=>{
            setTitle(event.target.value)
        }} required disabled={isDisabled}/>
        <input type='text' placeholder='Enter description' onChange={(event)=>{
            setDescription(event.target.value)
        }} required disabled={isDisabled}/>
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files?.[0]);
        }}
      required disabled={isDisabled}/>
      <Button  disabled={isDisabled}
        onClick={async (e) => {
          e.preventDefault()
          if (file) {
            const res = await edgestore.publicFiles.upload({
              file,
              onProgressChange: (progress) => {
                  setValue(progress)
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
      
      {isDisabled && <CircularProgress
      aria-label="Loading..."
      size="lg"
      value={value}
      color="success"
      showValueLabel={true}
    />}
    </div>
    </>
  );
}
    