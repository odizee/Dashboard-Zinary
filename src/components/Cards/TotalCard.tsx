import { cn } from "../../utils";

interface WithdrawalCardProps {
  title: string;
  amount: string;
  className: string;
}

const TotalCard = ({ title, amount, className }: WithdrawalCardProps) => {
  return (
    <div className={cn("", className)}>
      <p className="mb-2 font-bold text-xs">{title}</p>
      <p className="text-base font-bold">{amount}</p>
    </div>
  );
};

export default TotalCard;
