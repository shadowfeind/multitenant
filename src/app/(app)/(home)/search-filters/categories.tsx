import { Category } from "@/payload-types";
import CategoryDropdown from "./category-dropdown";

type Props = {
  data: any;
};

export const Categories: React.FC<Props> = ({ data }: Props) => {
  return (
    <div className="relative w-full">
      <div className="flex flex-nowrap items-center">
        {data.map((category: Category) => {
          return (
            <div key={category.id}>
              <CategoryDropdown
                category={category}
                isActive={false}
                isNavigationHovered={false}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
