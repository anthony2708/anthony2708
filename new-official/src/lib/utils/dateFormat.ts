import { format } from "date-fns";
import { vi } from "date-fns/locale";

const dateFormat = (
  date: Date | string,
  pattern: string = "dd 'Tháng' MM yyyy",
): string => {
  const dateObj = new Date(date);
  const output = format(dateObj, pattern, { locale: vi });
  return output;
};

export default dateFormat;
