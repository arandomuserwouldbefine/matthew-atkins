import {createClient} from '@supabase/supabase-js'
import { cookies } from 'next/headers'


export async function POST() {
    cookies()
    const supabase = createClient("https://fkknmfzksbfjnrpymnpe.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZra25tZnprc2Jmam5ycHltbnBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyODY3MjksImV4cCI6MjAyNDg2MjcyOX0.Nqr-xh8npQxI-811UprfOvAja6GMacKcT1fK-Okwqw0")
    const {data,error} = await supabase.from("photos").select()
    return Response.json({data})
}