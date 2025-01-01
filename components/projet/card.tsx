import { SlOptionsVertical } from "react-icons/sl";
import { FaStar } from "react-icons/fa";

export const CardProjet = ({data}: any) => {
  return (
    <div className="flex flex-col w-1/5 max-lg:w-full h-80 bg-white border-cyan-600 mb-5 border-2 rounded-md cursor-pointer hover:scale-110">
      <div className="h-2/3 p-2">
        <img src={data.img} alt="" className="w-full h-full rounded-md" />
      </div>
      <div className="h-1/3 flex flex-col gap-5 px-2">
        <div className="w-full text-center">
            <h1>{data.nom}</h1>
        </div>
        <div className="flex justify-between w-full">
            <div className=" text-yellow-500 flex gap-1">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <div className="bg-cyan-400 p-1 rounded-lg">
                <h2>{data.prix}</h2>
            </div>
        </div>
      </div>
    </div>
  )
}
