
import { Header } from '@/components/header/header'
import { CardProjet } from '@/components/projet/card'
import React from 'react'

const page = () => {
    
    const ballons = [
        {
          nom: "Ballon Fifa",
          img: "b1.jpg",
          prix: "15 000F",
        },
        {
          nom: "Ballon",
          img: "b2.jpg",
          prix: "10 000F"
        }
      ]
  return (
    <>
    <div className="flex h-20 w-full mb-2">
                <Header/>  
        </div> 
    <div className="flex flex-col max-lg:gap-1 gap-5 m-[5%] border shadow-sm border-cyan-400 rounded-md p-10">
            <div className="text-center">
                <h1 className="text-4xl">Ballons</h1>
            </div>
            <div className="flex max-lg:flex-col gap-[6%] flex-wrap">
              {ballons.map((test: any, key: number)=>(
                <CardProjet key={key} data={test}/>
              ))}
            </div>
    </div>
    </>
  )
   
}

export default page
