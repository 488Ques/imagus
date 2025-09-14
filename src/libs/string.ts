/**
 * Generates a random alphanumeric string of the specified length.
 * @param length - The length of the random string to generate.
 * @returns A random string consisting of uppercase letters, lowercase letters, and digits.
 */
export function generateRandomString(length: number): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
