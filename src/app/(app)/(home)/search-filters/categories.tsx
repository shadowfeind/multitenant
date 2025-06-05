import { Category } from "@/payload-types";
import CategoryDropdown from "./category-dropdown";

type Props = {
  data: unknown;
};

export const Categories: React.FC<Props> = ({ data }: Props) => {
  return (
    <div>
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
  );
};
