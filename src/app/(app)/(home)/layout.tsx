import { Navbar } from "@/app/(app)/(home)/navbar";
import { Footer } from "@/app/(app)/(home)/footer";
import { SearchFilters } from "@/app/(app)/(home)/search-filters";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import { Category } from "@/payload-types";

const homeLayout = async ({ children }: { children: React.ReactNode }) => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
    depth: 1,
    pagination: false,
    where: {
      parent: {
        exists: false,
      },
    },
  });

  const formattedData = data.docs.map((doc) => {
    return {
      ...doc,
      subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
        // because of depth:1 we are confident doc will be a type of Category
        ...(doc as Category),
        subcategories: undefined,
      })),
    };
  });

  console.log({ formattedData, data });

  return (
    <div className={"flex flex-col min-h-screen"}>
      <Navbar />
      <SearchFilters data={formattedData} />
      <div className="flex-1 bg-[#f4f4f0]">{children}</div>
      <Footer />
    </div>
  );
};

export default homeLayout;
