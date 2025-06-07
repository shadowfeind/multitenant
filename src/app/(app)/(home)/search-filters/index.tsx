import { SearchInput } from "@/app/(app)/(home)/search-filters/search-input";
import { Categories } from "./categories";
import { CustomCategory } from "@/types";

type Props = {
  data: CustomCategory[];
};

export const SearchFilters = ({ data }: Props) => {
  return (
    <div className={"px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full"}>
      <SearchInput />
      <Categories data={data} />
    </div>
  );
};
