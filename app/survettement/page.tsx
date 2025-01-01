
import { Header } from '@/components/header/header'
import { CardProjet } from '@/components/projet/card'
import React from 'react'

const page = () => {
    

    const survetements = [
        {
          nom: "Nom Vetement & accessoire",
          img: "s1.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "s2.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "s3.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "s4.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "s5.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "s6.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "s7.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "s8.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "s9.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "s10.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "s11.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "s12.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "s13.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "s14.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "s15.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "s16.jpg",
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
                <h1 className="text-4xl">SURVETTEMENTS</h1>
            </div>
            <div className="flex max-lg:flex-col gap-[6%] flex-wrap">
              {survetements.map((test: any, key: number)=>(
                <CardProjet key={key} data={test}/>
              ))}
            </div>
    </div>
    </>
    
  )
}

export default page
