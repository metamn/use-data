# use-data

React data hook with pluggable strategies.

## Why another library?

- The official [Suspense for data fetching](https://reactjs.org/docs/concurrent-mode-suspense.html) is experimental at this moment
- What's left is to use similar libraries (strategies) like SWR or `react-async`

## Approach

1. Build a general data hook
2. Integrate any library (strategy) like:

- SWR
- react-async
- and more

No matter the strategy used the hook should always work the same way and return the same params.

1. Returns default data while real data is loaded from the API
2. Returns errors, if there are any
3. Returns the data once loaded from the API

## This project

Gives you the data hook with a few strategies implemented (see them in `/src/hooks/useData`) and the test components associated to every strategy. (in `src/components`)

## Usage

1. Copy the `src/hooks` folder into your app
2. Create your own strategy or use an existing one. Remove all others.

## Documentation

See the [hook docs](./src/hooks/useAuth/useData.md) for details.
