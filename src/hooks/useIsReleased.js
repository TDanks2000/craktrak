import { useMemo } from "react";

const isValidDate = (d) => {
  return d instanceof Date && !isNaN(d);
};

export default function useIsReleased(date) {
  const isReleased = useMemo(() => {
    // one day margin
    const current = new Date().getTime() + 1000 * 60 * 60 * 24;
    const release = new Date(date || new Date()).getTime();

    if (!isValidDate(new Date(date))) return false;
    if (date === "2022") return false;

    return current >= release;
  }, [date]);

  return isReleased;
}
