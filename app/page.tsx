"use client"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { ChangeEvent, useState } from "react"
import { Copy } from 'lucide-react';
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
export default function Home() {

  const [crushName, setCrushName] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isGenerated, setIsGenerated] = useState<boolean>(false)
  const [isError , setError] = useState<boolean>(false) 
  const [link , setLink] = useState<string>("")
  
   const [isCopied , setIsCopied] = useState<boolean>(false) 
  const [generatedLink, setGeneratedLink] = useState<string>("http://localhost:3000/request")

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    setCrushName(e.target.value)
  }

  function handleGenerate() {

    if(crushName === ""){
      setError(true)

      setTimeout(()=>{
           setError(false)
      },2000)

      return
    }
    setIsLoading(true)
   setIsGenerated(false)
    setTimeout(() => {
      setLink(`${generatedLink}?name=${crushName}`)
      setIsGenerated(true)
      setIsLoading(false);
    }, 4000)

  }

const copyToClipboard = () => {
    navigator.clipboard.writeText(link)
      .then(() => {
        setIsCopied(true)

        setTimeout(()=>{
          setIsCopied(false);
        },1000)

      })
      .catch((error) => {
        console.error('Error copying text to clipboard:', error);

      });
  };
  function copy(){

  }
  return (
    <div className='h-screen w-screen flex justify-center items-center flex-col bg-rose-200'>
      <p className=' text-xl md:text-6xl text-pink-500 pl-2'> Ask your crush out now !</p>
      <img src="https://media.giphy.com/media/ZCSPaG9pPpSJEBiOUF/giphy.gif" alt="Cute animated illustration"></img>



      <Popover>
        <PopoverTrigger className="border-solid bg-pink-500 px-4 py-2 text-neutral-100 rounded-md text-2xl cursor-pointer" >Generate Link</PopoverTrigger>
        <PopoverContent className="flex justify-center items-center gap-2 flex-col ">
          <Input placeholder="Enter your crush's name" onChange={handleNameChange} className="w-full text-md px-2 py-2" />
          {
            isError ? <p className = "text-red-800 text-sm ">Sorry to see you dont have any !</p>: null
          }
 
          {
            !isLoading ? (<Button variant="outline" onClick={handleGenerate} className="text-md">
              {isGenerated ? "Generated" : "Generate"}
              </Button>) : <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Building website
            </Button>
          }
          {
            isGenerated ? (
              <Button className="bg-green-400" onClick={copyToClipboard}>
                <Copy className="mr-2 h-4 w-4" /> {isCopied ? "copied" : "copy link"}
              </Button>
            ) : null
          }
        </PopoverContent>
      </Popover>
    </div>



  )
}