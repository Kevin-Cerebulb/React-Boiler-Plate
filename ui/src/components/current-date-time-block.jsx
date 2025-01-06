import {useCurrentDateTime} from "@/hooks/use-current-date-time.jsx";
import { cn } from "@/lib/utils";
import {Flex, Text} from "@radix-ui/themes";

/** CurrentDateTimeBlock Component
 * @param {{
 * showDate?: boolean;
 * showTime?: boolean;
 * className?: string;
 * }} props
 * @returns 
 */
export function CurrentDateTimeBlock({showDate = true, showTime = true, className}) {
    const { currentDate, currentTime } = useCurrentDateTime();
    return (
        <Flex direction="column">
           { showDate ? <Text className={cn("text-base font-medium", className)}>{currentDate}</Text> : ""}
           { showTime ?  <Text className={cn("text-base font-medium", className)}>{currentTime}</Text> : ""}
        </Flex>
    );
}