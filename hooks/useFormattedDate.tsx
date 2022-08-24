import { format, formatDistanceToNow } from "date-fns";
import { enUS, faIR } from "date-fns/locale";

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
        format(date, "E, do MMM", { locale: locale === "en" ? enUS : faIR })
      );

    if (type === "widget") setFormattedDate(format(date, "MMM, do"));

    if (type === "distance") setFormattedDate(formatDistanceToNow(date));

    if (type === "footer") setFormattedDate(date.getFullYear().toString());
  }, [date, type]);

  return formattedDate;
};

export default useFormattedDate;
