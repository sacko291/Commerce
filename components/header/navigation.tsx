"use client"

import { usePathname } from "next/navigation"
import { NavButton } from "./nav-button"


const routers = [
    {
        href: "/accueil",
        label: "Accueil"
    },
    {
        href: "/chaussure",
        label: "Chaussure"
    },
    {
        href: "/accessoire",
        label: "Accessoire"
    },
    {
        href: "/maillot",
        label: "Maillot"
    },
    {
        href: "/survettement",
        label: "Survettement"
    },
    {
        href: "/ballon",
        label: "Ballon"
    },
]

export const Navigation = () => {

    const pathname = usePathname()

  return (
    <nav className="w-full flex items-center gap-2 max-lg:hidden ">
        {routers.map((router: any, key:number) => (
            <NavButton key={key} href={router.href} label={router.label} isActive={pathname === router.href} />
        ))}
    </nav>
  )
}

