import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
    CommandSeparator,
  } from "@/components/ui/command"
  import  Link  from "next/link"

export const CommandLateral = ({siteBarMenu}: {siteBarMenu: any}) => {
  return (
    <Command>
            <CommandList className="max-h-screen h-full mb-5 no-scrollbar">
                {siteBarMenu.map((option: any, key: number) => (
                    <CommandGroup key={key} className="m-2">
                                <Link className="flex hover:bg-cyan-500 hover:text-white rounded-md" key={key} href={option.url}>
                                    <CommandItem>{option.text}</CommandItem>
                                </Link>                  
                        <CommandSeparator />
                    </CommandGroup>

                )
                )}
                
            </CommandList>
        </Command>
  )
}


