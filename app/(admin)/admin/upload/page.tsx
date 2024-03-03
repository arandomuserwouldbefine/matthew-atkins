
'use client'
import * as React from 'react';
import { useEdgeStore } from '@/lib/edgestore';
import { createClient } from '@supabase/supabase-js';
import { Button } from '@/components/ui/button';


export default function Page() {
  const [file, setFile] = React.useState<File>();
  const [isDisabled, setIsDisabled] = React.useState(false)
  const { edgestore } = useEdgeStore(); 
  const [title, setTitle] = React.useState("")
  const [description, setDescription] = React.useState("")
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
        onClick={async () => {
          if (file) {
            const res = await edgestore.publicFiles.upload({
              file,
              onProgressChange: (progress) => {
                setIsDisabled(true)
                console.log(progress);
              },
            });

            const supabase = createClient("https://fkknmfzksbfjnrpymnpe.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZra25tZnprc2Jmam5ycHltbnBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyODY3MjksImV4cCI6MjAyNDg2MjcyOX0.Nqr-xh8npQxI-811UprfOvAja6GMacKcT1fK-Okwqw0")
            const insertImageUrl = await supabase.from("photos").insert({"title":title,"description":description,"image_url":res.url})
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
    