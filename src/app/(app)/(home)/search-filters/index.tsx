import {SearchInput} from "@/app/(app)/(home)/search-filters/search-input";

type Props = {
    data: any
}

export const SearchFilters = ({data}: Props) => {
    return <div className={"px-4 lg:px-12 py-8 border-b flex flex-col gap04 w-full"}>
        <SearchInput />
        {JSON.stringify(data, null, 2)}</div>
}