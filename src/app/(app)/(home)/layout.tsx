import {Navbar} from "@/app/(app)/(home)/navbar";
import {Footer} from "@/app/(app)/(home)/footer";
import {SearchFilters} from "@/app/(app)/(home)/search-filters";
import {getPayload} from "payload";
import configPromise from "@payload-config"

const homeLayout = async({children} : {children: React.ReactNode}) => {
    const payload = await getPayload({
        config: configPromise
    })

    const data = await payload.find({
        collection: "categories",
        depth: 1,
        where: {
            parent: {
                exists: false
            }
        }
    })
    return(
        <div className={"flex flex-col min-h-screen"}>
            <Navbar />
            <SearchFilters data={data} />
          <div className="flex-1 bg-[#f4f4f0]">
              {children}
          </div>
            <Footer />
        </div>
    )
}

export default homeLayout;