# use-data

React data hook with pluggable strategies

## Why another library?

- [Suspense for data fetching](https://reactjs.org/docs/concurrent-mode-suspense.html) is experimental at this moment
- Tried to go exclusively with [SWR](https://swr.now.sh/) but caching complicates things like the UI is not refreshed even if in the network tab we have a successful request returning status code 200

## Approach

- Build a general data hook
- Integrate any library (strategy) like:

  - fetch
  - axios
  - SWR
  - and more

See the [hook docs](./src/hooks/useData/useData.md) for details.
