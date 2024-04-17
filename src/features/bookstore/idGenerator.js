export function generateUniqueId() {
  const timestamp = new Date().getTime().toString(16);
  const randomPart = Math.random().toString(16).slice(2);
  return timestamp + randomPart;
}
