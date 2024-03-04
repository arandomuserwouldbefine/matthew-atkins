import { db } from "@/lib/db"
export async function POST(request:Request) {
    const {title,description,image_url} = await request.json()
    await db.images.create({
        data:{
          title: title,
          description: description,
          image_url: image_url
        }
      })
    
}