import { Header } from "@/components/header/header"
import { CardProjet } from "@/components/projet/card"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


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

  const survetements = [
    {
      nom: "Survetement",
      img: "s1.jpg",
      prix: "25 000F"
    },
    {
      nom: "Survetement",
      img: "s2.jpg",
      prix: "25 000F"
    },
    {
      nom: "Survetement",
      img: "s3.jpg",
      prix: "25 000F"
    },
    {
      nom: "Survetement",
      img: "s4.jpg",
      prix: "25 000F"
    },
    {
      nom: "Survetement",
      img: "s5.jpg",
      prix: "25 000F"
    },
    {
      nom: "Survetement",
      img: "s6.jpg",
      prix: "25 000F"
    },
    {
      nom: "Survetement",
      img: "s7.jpg",
      prix: "25 000F"
    },
    {
      nom: "Survetement",
      img: "s8.jpg",
      prix: "25 000F"
    },
    {
      nom: "Survetement",
      img: "s9.jpg",
      prix: "25 000F"
    },
    {
      nom: "Survetement",
      img: "s10.jpg",
      prix: "25 000F"
    },
    {
      nom: "Survetement",
      img: "s11.jpg",
      prix: "25 000F"
    },
    {
      nom: "Survetement",
      img: "s12.jpg",
      prix: "25 000F"
    },
    {
      nom: "Survetement",
      img: "s13.jpg",
      prix: "25 000F"
    },
    {
      nom: "Survetement",
      img: "s14.jpg",
      prix: "25 000F"
    },
    {
      nom: "Survetement",
      img: "s15.jpg",
      prix: "25 000F"
    },
    {
      nom: "Survetement",
      img: "s16.jpg",
      prix: "25 000F"
    }
  ]

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

  
  const dataCarrousel = [
    {
      url: "a1.jpg"
    },
    {
      url: "a19.jpg"
    },
    {
      url: "a4.jpg"
    },
    {
      url: "a22.jpg"
    },
    {
      url: "a27.jpg"
    },
  ]
  return (
    <div className="">
      <div className="flex h-20 w-full mb-2">
        <Header/>  
      </div>
      <div className="w-full max-lg:h-[200px] h-[450px]">
      <Carousel className="w-4/5 max-lg:w-4/6 max-lg:h-[200px] max-lg:mx-16 m-auto">
        <CarouselContent className="max-lg:h-[200px] h-[450px]">
          {dataCarrousel.map((carrousel, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center w-full p-6 h-[450px] max-lg:h-[200px]">
                    <img src={carrousel.url} alt="" className="w-full h-[450px] max-lg:h-[200px]"/>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>
      <div className="flex flex-col max-lg:gap-1 gap-5 m-[5%] border shadow-sm border-cyan-400 rounded-md p-10">
        <div className="text-center">
            <h1 className="text-4xl">CHAUSSURES</h1>
        </div>
        <div className="flex max-lg:flex-col gap-[6%] flex-wrap">
          {data.map((test: any, key: number)=>(
            <CardProjet data={test} key={key} />
          ))}
        </div>
      </div>
      <div className="flex flex-col max-lg:gap-1 gap-5 m-[5%] border shadow-sm border-cyan-400 rounded-md p-10">
        <div className="text-center">
            <h1 className="text-4xl">ACCESSOIRES</h1>
        </div>
        <div className="flex max-lg:flex-col gap-[6%] flex-wrap">
          {accessoires.map((test: any, key: number)=>(
            <CardProjet data={test} key={key} />
          ))}
        </div>
      </div>
      <div className="flex flex-col max-lg:gap-1 gap-5 m-[5%] border shadow-sm border-cyan-400 rounded-md p-10">
        <div className="text-center">
            <h1 className="text-4xl">MAILLOTS</h1>
        </div>
        <div className="flex max-lg:flex-col gap-[6%] flex-wrap">
          {maillots.map((test: any, key: number)=>(
            <CardProjet data={test} key={key} />
          ))}
        </div>
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
      <div className="flex flex-col max-lg:gap-1 gap-5 m-[5%] border shadow-sm border-cyan-400 rounded-md p-10">
        <div className="text-center">
            <h1 className="text-4xl">BALLON</h1>
        </div>
        <div className="flex max-lg:flex-col gap-[6%] flex-wrap">
          {ballons.map((test: any, key: number)=>(
            <CardProjet key={key} data={test}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page