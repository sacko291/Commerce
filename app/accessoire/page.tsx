import { Header } from '@/components/header/header'
import { CardProjet } from '@/components/projet/card'
import React from 'react'

const page = () => {
    const accessoires = [
        {
          nom: "Nom Vetement & accessoire",
          img: "a1.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "a2.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "a3.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "a4.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "a5.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "a28.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "a7.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "a8.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "a9.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "a10.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "a11.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "a12.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "a13.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "a14.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "a15.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "a16.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "a17.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "a18.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "a19.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "a20.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "a21.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "a22.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "a23.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "a24.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "a25.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "a26.jpg",
          prix: "10 000F"
        },
        {
          nom: "Nom Vetement & accessoire",
          img: "a27.jpg",
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
                <h1 className="text-4xl">ACCESSOIRES</h1>
            </div>
            <div className="flex max-lg:flex-col gap-[6%] flex-wrap">
              {accessoires.map((test: any, key: number)=>(
                <CardProjet key={key} data={test}/>
              ))}
            </div>
    </div>
    </>
  )
}

export default page
