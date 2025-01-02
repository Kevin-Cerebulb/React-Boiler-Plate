import {useCurrentDateTime} from "@/hooks/use-current-date-time.jsx";
import {Flex, Text} from "@radix-ui/themes";

export function CurrentDateTimeBlock(){
    const { currentDate, currentTime } = useCurrentDateTime();
    return (
        <Flex direction="column">
            <Text className="text-base font-medium">{currentDate}</Text>
            <Text className="text-base font-medium">{currentTime}</Text>
        </Flex>
    );
}