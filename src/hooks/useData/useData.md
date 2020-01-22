## useData

## useSWR

- it acts strange due to its built in caching mechanism
- for example clicking a button to an API call can do nothing at all.
- or, even if in the network tab a result is retrieved the UI stays the same, without being refreshed

## Usage

```js
const { data, error } = useData(api);

useEffect(() => {
  if (error) setResult(JSON.stringify(error));
  if (data) setResult(JSON.stringify(data));
}, [data, error]);
```
