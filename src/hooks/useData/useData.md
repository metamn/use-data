# useData

A hook for working with data

## How it works?

1. Returns default data while real data is loaded from the API
2. Returns errors, if there are any
3. Returns the data once loaded from the API

## Strategies

The hook offers a skeleton in which any strategies (data fetching libraries) can be plugged in.

### react-async

- https://github.com/async-library/react-async

### useSWR

- https://swr.now.sh/
- It's complicated due to the cache. Sometimes the UI is not refreshed even if in the network tab we have a successful request returning status code 200.
