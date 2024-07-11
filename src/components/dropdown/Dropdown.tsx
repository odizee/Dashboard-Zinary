import { cn } from "../../utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export interface DropdownListProp {
  id: number;
  label: string;
  value: string;
}

interface DropdownProp {
  dropdownList: DropdownListProp[];
  triggerClass?: string;
}

const Dropdown = ({ dropdownList, triggerClass }: DropdownProp) => {
  return (
    <div>
      <Select>
        <SelectTrigger className={cn("w-[180px]", triggerClass)}>
          <SelectValue placeholder="Select an Item" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {dropdownList.map((item) => (
              <SelectItem key={item.id} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Dropdown;
