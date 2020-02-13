# useData

React data hook with pluggable strategies.

## How it works

- `useData({...})` returns always `{data, timestamp}` and / or `error`
- Depending on strategy it can return functions like `reload, cancel`

## Usage

1. Select a strategy specific to the project in `useData.js`
2. Map strategy specific props to the hook in `useData.js`

```js
/**
 * Prepares the props
 *
 * - This step has to be performed to map a strategy to the hook code below
 */
const initialValue = getInitialValueUseDataAsync(props);
const hookProps = getHookPropsUseDataAsync(props);
```

3. Remove all the other strategies

## Strategies

Currently these strategies are implemented:

### react-async

See the [hook docs](../strategies/useDataAsync/useDataAsync.md) for details.

### useSWR

- https://swr.now.sh/
- It's complicated due to the cache. Sometimes the UI is not refreshed even if in the network tab we have a successful request returning status code 200.
