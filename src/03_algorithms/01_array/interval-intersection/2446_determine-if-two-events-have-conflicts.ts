export function haveConflict(event1: string[], event2: string[]): boolean {
    if (!event1.length || !event2.length) {
        return false;
    }

  // Extract start and end times from event1 and event2
  const startTime1 = event1[0];
  const endTime1 = event1[1];
  const startTime2 = event2[0];
  const endTime2 = event2[1];

  // Convert HH:MM time format to minutes past midnight for easier comparison
  const toMinutes = (time: string): number => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  };

  const start1 = toMinutes(startTime1);
  const end1 = toMinutes(endTime1);
  const start2 = toMinutes(startTime2);
  const end2 = toMinutes(endTime2);

  // Check for overlap
  if (
    (end1 >= start2 && start1 <= end2) ||
    (end2 >= start1 && start2 <= end1)
  ) {
    return true; // There is an overlap
  } else {
    return false; // No overlap
  }
}

export function haveConflict_FASTEST(
  event1: string[],
  event2: string[]
): boolean {
    if (!event1.length || !event2.length) {
        return false;
    }
  const from1 = +event1[0].split(":")[0] * 60 + +event1[0].split(":")[1];
  const from2 = +event2[0].split(":")[0] * 60 + +event2[0].split(":")[1];
  const to1 = +event1[1].split(":")[0] * 60 + +event1[1].split(":")[1];
  const to2 = +event2[1].split(":")[0] * 60 + +event2[1].split(":")[1];

  return (
    (from1 >= from2 && from1 <= to2) ||
    (to1 >= from2 && to1 <= to2) ||
    (from2 >= from1 && from2 <= to1)
  );
}
