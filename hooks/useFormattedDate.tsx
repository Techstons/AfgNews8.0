import { format, formatDistanceToNow } from "date-fns";
import { useState, useEffect } from "react";

type FormatedDateProps = "nav" | "footer" | "widget" | "distance";

const useFormattedDate = (date: Date, type: FormatedDateProps) => {
  const [formattedDate, setFormattedDate] = useState<string>();

  useEffect(() => {
    if (type === "nav") setFormattedDate(format(date, "E, d MMM"));

    if (type === "widget") setFormattedDate(format(date, "MMM, do"));

    if (type === "distance") setFormattedDate(formatDistanceToNow(date));

    if (type === "footer") setFormattedDate(date.getFullYear().toString());
  }, [date, type]);

  return formattedDate;
};

export default useFormattedDate;
