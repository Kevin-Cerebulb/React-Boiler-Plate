import moment from "moment";
import {useInterval} from "react-use";
import {useState} from "react";

export function useCurrentDateTime() {
    const [currentDate, setCurrentDate] = useState(moment().format("Do MMM YYYY"));
    const [currentTime, setCurrentTime] = useState(moment().format("LTS"));

    useInterval(() => {
        setCurrentDate(moment().format("Do MMM YYYY"));
        setCurrentTime(moment().format("LTS"));
    }, 1000);

  return {
      currentTime : currentTime,
      currentDate : currentDate,
  };
}