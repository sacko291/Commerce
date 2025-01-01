
import { CommandLateral } from "@/components/sidebar/command";
import { IoMdMenu } from "react-icons/io";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export const SibebarAccueil = () => {
    
    const siteBarMenu = [
        {
            url: "/accueil",
            text: "Accueil"
        },
        {
            url: "/chaussure",
            text: "Chaussure"
        },
        {
            url: "/accessoire",
            text: "Accessoire"
        },
        {
            url: "/maillot",
            text: "Maillot"
        },
        {
            url: "/survettement",
            text: "Survettement"
        },
        {
            url: "/ballon",
            text: "Ballon"
        },
    ]

  return (
    <div className="border-separate hidden  max-lg:flex flex-col px-2">
        <Sheet>
            <SheetTrigger asChild>
                <IoMdMenu className={
                    cn("outline-none bg-cyan-500 hover:bg-cyan-600 cursor-pointer text-white size-10 p-1 rounded-md"
                    )
                }/>
            </SheetTrigger>
            <SheetContent side={"right"}>
                <CommandLateral siteBarMenu={siteBarMenu}/>
            </SheetContent>
        </Sheet>
    </div>
  )
}


