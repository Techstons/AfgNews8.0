import { format, formatDistanceToNow } from "date-fns";
import { useState, useEffect } from "react";

type FormatedDateProps = "nav" | "footer" | "widget" | "distance";

const useFormattedDate = (
  date: Date,
  type: FormatedDateProps,
  locale?: string
) => {
  const [formattedDate, setFormattedDate] = useState<string>();

  useEffect(() => {
    if (type === "nav")
      setFormattedDate(
        locale === "en"
          ? format(date, "E, MMM d, yyyy")
          : new Intl.DateTimeFormat("fa", {
              month: "numeric",
              day: "numeric",
              year: "numeric",
              weekday: "long",
            }).format(date)
      );

    if (type === "widget") setFormattedDate(format(date, "MMM, do"));

    if (type === "distance") setFormattedDate(formatDistanceToNow(date));

    if (type === "footer") setFormattedDate(date.getFullYear().toString());
  }, [date, type]);

  return formattedDate;
};

export default useFormattedDate;
