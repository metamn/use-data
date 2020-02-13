# useData

React data hook with pluggable strategies

## Strategies

Currently these strategies are implemented:

### react-async

See the [hook docs](../strategies/useDataAsync/useDataAsync.md) for details.

### useSWR

- https://swr.now.sh/
- It's complicated due to the cache. Sometimes the UI is not refreshed even if in the network tab we have a successful request returning status code 200.
