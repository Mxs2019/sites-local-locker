import React from "react";
import cx from "classnames";

type OpenHours = {
  openIntervals?: { start: string; end: string }[];
  isClosed?: boolean;
};
type Props = {
  //Insert Props Here
  hours: {
    monday: OpenHours;
    tuesday: OpenHours;
    wednesday: OpenHours;
    thursday: OpenHours;
    friday: OpenHours;
    saturday: OpenHours;
    sunday: OpenHours;
  };
};

const dayOrder = [
    "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const Hours = ({ hours }: Props) => {
  var d = new Date();
  var n = d.getDay();

  return (
    <table className="w-full">
      <tbody>
        {dayOrder.map((day, index) => (
          <tr key={day} className={cx("hover:bg-gray-100", {
              "bg-gray-100": n === index
          })}>
            <td className="text-xs text-gray-500 font-medium px-2 py-1 border-b">
              {day.toLocaleUpperCase()}
            </td>
            <td className="px-2 py-1 border-b font-light text-sm">
              {hours[day].isClosed
                ? "Closed"
                : hours[day].openIntervals?.map((i) => `${i.start}-${i.end}`)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Hours;
