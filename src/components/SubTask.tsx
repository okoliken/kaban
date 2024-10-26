import { Checkbox } from "../components/ui/checkbox";

interface SubTaskProps {
  text: string;
  id: string;
}

export const SubTask = ({ text, id }: SubTaskProps) => {
  return (
    <button className="h-[2.5rem] rounded-[0.25rem] w-full bg-light-gray hover:bg-primary-1/25 dark:bg-[#20212C] dark:hover:bg-primary-1/25 items-center flex px-4 text-xs">
      <label htmlFor={id} className="flex items-center gap-x-4">
        <Checkbox id={id} />
        <p className="font-bold leading-[0.945rem]">{text}</p>
      </label>
    </button>
  );
};
