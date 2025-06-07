import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

type Props = {
  disabled?: boolean;
};

export const SearchInput = ({ disabled }: Props) => {
  return (
    <div className={"flex items-center w-full gap-2"}>
      <div className="relative w-full">
        <SearchIcon
          className={
            "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500"
          }
        />
        <Input
          className={"pl-8"}
          placeholder={"Search..."}
          disabled={disabled}
        />
      </div>
    </div>
  );
};
