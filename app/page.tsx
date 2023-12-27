"use client"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { ChangeEvent, useState } from "react"
import { Copy } from 'lucide-react';

import { Button } from "@/components/ui/button"
export default function Home() {

  const[crushName , setCrushName] = useState<string>("")
  const[generatedLink , setGeneratedLink] = useState<string>("http://localhost:3000")

  function handleNameChange (e : ChangeEvent<HTMLInputElement>){

    setCrushName(e.target.value)
    console.log(e.target.value)

  }

  function handleGenerate (){
   console.log(`${generatedLink}?name=${crushName}`)
  }
  return (
    <div className='h-screen w-screen flex justify-center items-center flex-col bg-rose-200'>
      <p className=' text-xl md:text-6xl text-pink-500 pl-2'> Ask you crush out now !</p>
      <img src="https://media.giphy.com/media/ZCSPaG9pPpSJEBiOUF/giphy.gif" alt="Cute animated illustration"></img>

        
 
<Popover >
  <PopoverTrigger className="border-solid bg-pink-500 px-4 py-2 text-neutral-100 rounded-md text-2xl cursor-pointer" >Generate Link</PopoverTrigger>
  <PopoverContent className="flex justify-center items-center gap-2"><Input placeholder="Enter your crush's name" onChange={handleNameChange}/>
  <Button variant="outline" onClick={handleGenerate}>Generate</Button>
<Copy size={48} strokeWidth={1.75} />
</PopoverContent>
</Popover>
        </div>



  )
}
