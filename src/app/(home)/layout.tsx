import {Navbar} from "@/app/(home)/navbar";

const homeLayout = ({children} : {children: React.ReactNode}) => {
    return(
        <div className={"flex flex-col min-h-screen"}>
            <Navbar />
            {children}
        </div>
    )
}

export default homeLayout;