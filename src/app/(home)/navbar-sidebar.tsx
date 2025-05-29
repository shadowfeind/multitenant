import {Sheet, SheetContent, SheetHeader, SheetTitle} from "@/components/ui/sheet";
import {ScrollArea} from "@/components/ui/scroll-area";
import Link from "next/link";

interface NavbarSidebarProps {
    items: NavbarItem[]
    open: boolean
    onOpenChange: (isOpen: boolean) => void
}

interface NavbarItem {
    href: string
    children: React.ReactNode
}

export const NavbarSidebar = (props: NavbarSidebarProps) => {
    return (
        <Sheet open={props.open} onOpenChange={props.onOpenChange} >
            <SheetContent side={"left"} className={"p-0 transition-none"} >
                <SheetHeader className={"p-4 border-b"} >
                    <div className="flex items-center">
                        <SheetTitle>
                            Menu
                        </SheetTitle>
                    </div>
                </SheetHeader>
                <ScrollArea className={"flex flex-col overflow-y-auto h-full pb-2"} >
                    {props.items.map((item: NavbarItem) => (<Link key={item.href} href={item.href} className={"w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"} >{item.children}</Link>))}
               <div className="border-t">
                   <Link href="/sign-in"  className={"w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"}>Log in</Link>
                   <Link href="/"  className={"w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"}>Start selling</Link>
               </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
}