import { CurrentDateTimeBlock } from "@/components/current-date-time-block";
import { Footer } from "@/components/footer";
import { MeteorDemo } from "@/components/magic-ui/demos/animated-meteor";
import { LoginForm } from "@/components/shadcn-ui/login/login-form";
import { Flex } from "@radix-ui/themes";
import { CalendarDays } from "lucide-react";


export function Component() {
  return (
      <MeteorDemo>
      <Flex direction="column" className="w-full max-w-sm mt-auto">
        <div className="flex items-center gap-2 self-center font-medium">
          Company Logo
        </div>
        <LoginForm />
        <div className="flex items-center self-center">
        <CalendarDays className="mr-2" /><CurrentDateTimeBlock showTime={false} className="text-base"/>
        </div>
      </Flex>
      <div className="mt-auto z-10 w-full">
				<Footer />
			</div>
    </MeteorDemo>
  );
}
