import { Header } from '@/components/header/header'
import { CardProjet } from '@/components/projet/card'
import React from 'react'

const page = () => {
    const data = [
        {
          nom: "Basket",
          img: "c1.jpg",
          prix: "20 000F"
        },
        {
          nom: "Basket",
          img: "c2.jpg",
          prix: "20 000F"
        },
        {
          nom: "Basket",
          img: "c3.jpg",
          prix: "20 000F"
        },
        {
          nom: "Basket",
          img: "c4.jpg",
          prix: "10 000F"
        },
        {
          nom: "Basket",
          img: "c5.jpg",
          prix: "20 000F"
        },
        {
          nom: "Basket",
          img: "c6.jpg",
          prix: "20 000F"
        },
        {
          nom: "Basket",
          img: "c7.jpg",
          prix: "20 000F"
        },
        {
          nom: "Crampons",
          img: "c8.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c9.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c10.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c11.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c12.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c13.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c14.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c15.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c16.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c17.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c18.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c19.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c20.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c21.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c22.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c23.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c24.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c25.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c26.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c27.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c28.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c29.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c30.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c31.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c32.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c33.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c34.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c35.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c36.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c37.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c38.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c39.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c40.jpg",
          prix: "35 000F"
        },{
          nom: "Crampons",
          img: "c41.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c42.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c43.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c44.jpg",
          prix: "35 000F"
        },
        {
          nom: "Crampons",
          img: "c45.jpg",
          prix: "35 000F"
        }
      ]
  return (
    <>
      <div className="flex h-20 w-full mb-2">
                  <Header/>  
          </div>
          <div className="flex flex-col max-lg:gap-1 gap-5 m-[5%] border shadow-sm border-cyan-400 rounded-md p-10">
            <div className="text-center">
                <h1 className="text-4xl">CHAUSSURES</h1>
            </div>
            <div className="flex max-lg:flex-col gap-[6%] flex-wrap">
              {data.map((test: any, key: number)=>(
                <CardProjet key={key} data={test}/>
              ))}
            </div>
          </div>
    </>
    
  )
}

export default page
