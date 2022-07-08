export default function parseError(error) {
  return String(error?.data?.message || error?.data || error);
}
