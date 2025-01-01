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
      nom: "Nom Vetement & accessoire",
      img: "c1.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c2.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c3.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c4.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c5.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c6.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c7.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c8.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c9.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c10.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c11.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c12.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c13.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c14.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c15.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c16.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c17.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c18.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c19.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c20.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c21.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c22.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c23.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c24.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c25.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c26.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c27.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c28.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c29.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c30.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c31.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c32.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c33.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c34.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c35.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c36.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c37.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c38.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c39.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c40.jpg",
      prix: "10 000F"
    },{
      nom: "Nom Vetement & accessoire",
      img: "c41.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c42.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c43.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c44.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "c45.jpg",
      prix: "10 000F"
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
      nom: "Nom Vetement & accessoire",
      img: "m1.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "m2.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "m3.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "m4.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "m5.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "m6.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "m7.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "m8.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "m9.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "m10.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "m11.jpg",
      prix: "10 000F"
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
      nom: "Nom Vetement & accessoire",
      img: "m14.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
      img: "m15.jpg",
      prix: "10 000F"
    }
  ]

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

  const ballons = [
    {
      nom: "Nom Vetement & accessoire",
      img: "b1.jpg",
      prix: "10 000F"
    },
    {
      nom: "Nom Vetement & accessoire",
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