import { cn } from "../../utils";
import { Separator } from "../ui/separator";

interface ItemsListProps {
  id: number;
  title: string;
  amount: string;
}

interface TotalAmountsCardProp {
  itemsList: ItemsListProps[];
  className: string;
}

const TotalAmountsCard = ({ itemsList, className }: TotalAmountsCardProp) => {
  return (
    <div className={cn("px-4 py-6", className)}>
      {itemsList.map((item) => (
        <div key={item.id}>
          <p className="text-xs text-white">{item.title}</p>
          <p className="text-white text-base font-bold">{item.amount}</p>
          {item.id < 5 && <Separator className="bg-white my-4" />}
        </div>
      ))}
    </div>
  );
};

export default TotalAmountsCard;
