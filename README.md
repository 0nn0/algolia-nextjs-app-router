# Example with issue

Goal: Hide pagination when query is empty or there are no results
Problem: When I am on page 2, it still loads page 1 on the serverside, causing a brief flash of the page 1 results before showing the results of page 2

## Start the example

```sh
yarn install --no-lockfile
yarn run dev
```

Next...

1. Select the 2nd page
2. Do a hard refresh
   - Notice there is a brief flash where the first result is displayed
   - Notice the page its source code contains the data for page 1
