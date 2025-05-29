import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Progress} from "@/components/ui/progress";
import {Textarea} from "@/components/ui/textarea";
import {Checkbox} from "@/components/ui/checkbox";


export default function Home() {
  return (
      <div className="flex p-4 flex-col gap-y-2">
         <div>
             <Button variant={"elevated"}>My Button</Button>
         </div>
          <Input placeholder="Search..." />
          <Progress value={50} />
          <Textarea placeholder={"i am iron man"} />
          <Checkbox />
      </div>
  );
}
