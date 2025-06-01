import {Navbar} from "@/app/(app)/(home)/navbar";
import {Footer} from "@/app/(app)/(home)/footer";

const homeLayout = ({children} : {children: React.ReactNode}) => {
    return(
        <div className={"flex flex-col min-h-screen"}>
            <Navbar />
          <div className="flex-1 bg-[#f4f4f0]">
              {children}
          </div>
            <Footer />
        </div>
    )
}

export default homeLayout;