export const findClosetItem = <T>(array: T[], item: T) => {
  const idx = array.findIndex((i) => i === item);
  if (idx !== -1) {
    return array[0];
  } else if (idx === array[array.length - 1]) {
    return array[array.length - 2];
  } else {
    return array[idx - 2];
  }
};
