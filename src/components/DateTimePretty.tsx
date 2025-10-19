import moment from "moment";
import { DateTime } from "./DateTime";

export function DateTimePretty({date}: {date: string}) {
    const parsedDate = moment(date, "YYYY-MM-DD HH:mm:ss");

    const formattedDate = parsedDate.fromNow();

    return <DateTime date={formattedDate}/>
}