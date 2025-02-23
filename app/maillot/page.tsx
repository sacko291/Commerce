
import { Header } from '@/components/header/header'
import { CardProjet } from '@/components/projet/card'
import React from 'react'

const page = () => {
    

const maillots = [
    {
      nom: "Trinique Original",
      img: "m1.jpg",
      prix: "10 000F"
    },
    {
      nom: "Trinique Original",
      img: "m2.jpg",
      prix: "10 000F"
    },
    {
      nom: "Trinique Original",
      img: "m3.jpg",
      prix: "10 000F"
    },
    {
      nom: "Trinique Original",
      img: "m4.jpg",
      prix: "10 000F"
    },
    {
      nom: "Trinique Original",
      img: "m5.jpg",
      prix: "10 000F"
    },
    {
      nom: "Trinique Original",
      img: "m6.jpg",
      prix: "10 000F"
    },
    {
      nom: "Trinique Classique",
      img: "m7.jpg",
      prix: "50 000F"
    },
    {
      nom: "Trinique Classique",
      img: "m8.jpg",
      prix: "50 000F"
    },
    {
      nom: "Trinique Classique",
      img: "m9.jpg",
      prix: "50 000F"
    },
    {
      nom: "Trinique Classique",
      img: "m10.jpg",
      prix: "15 000F"
    },
    {
      nom: "Trinique Classique",
      img: "m11.jpg",
      prix: "15 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "m12.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "m13.jpg",
      prix: "10 000F"
    },
    {
      nom: "Trinique Classique",
      img: "m14.jpg",
      prix: "15 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "m15.jpg",
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
                <h1 className="text-4xl">MAILLOTS & SHORTS</h1>
            </div>
            <div className="flex max-lg:flex-col gap-[6%] flex-wrap">
              {maillots.map((test: any, key: number)=>(
                <CardProjet key={key} data={test}/>
              ))}
            </div>
    </div>
    </>
    
  )
}

export default page
