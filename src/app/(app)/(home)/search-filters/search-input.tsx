"use client";

import { ListFilterIcon, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CustomCategory } from "@/types";
import CategoriesSidebar from "./categories-sidebar";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type Props = {
  disabled?: boolean;
  data: CustomCategory[];
};

export const SearchInput = ({ disabled, data }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className={"flex items-center w-full gap-2"}>
      <CategoriesSidebar
        data={data}
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />
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
      <Button
        variant={"elevated"}
        className="size-12 shrink-0 flex lg:hidden"
        onClick={() => setIsSidebarOpen(true)}
      >
        <ListFilterIcon />
      </Button>
    </div>
  );
};
