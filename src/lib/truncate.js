export function truncate(input, maxLength) {
  if (input.length > maxLength) {
    return input.substring(0, maxLength) + "...";
  }

  return input;
}
