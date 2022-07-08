import axios from "axios";
import useSWR from "swr/immutable";
import parseError from "../utils/parse-error";

export const defaultProviders = ["gamestatus", "steamcrackedgames", "predb"];

const PORT = 3003 || 3004;
const baseURL = `http://localhost:${PORT}/api/game`;

const API = axios.create({ baseURL: baseURL });

const fetcher = async ({ query, providers = defaultProviders }) => {
  const { data } = await API.post("/crack/search", {
    s: query,
    providers,
  });
  return data;
};
// pass a query and providers and this hook will return whether the game has been cracked
export default function useCrack(query) {
  const providers = defaultProviders;

  const { data, error } = useSWR(
    query && providers ? { query, providers } : null,
    fetcher,
    {
      shouldRetryOnError: false,
    }
  );

  return {
    providers: providers || defaultProviders,
    data,
    error: parseError(error),
    cracked: !!data?.result,
    loading: !!(!data && !error && query),
  };
}
