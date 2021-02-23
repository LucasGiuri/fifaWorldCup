# Fifa world cup

Is a very simple web app (able for mobile view also) to complete the date from "round of 16 to the finals"

## Installation

Run this command: `npm install`
And then: `npm run dev`

if you want to run the test: : `npm run test`
if you want to run the linter: : `npm run lint`

### Technologies

I was using NextJS as wrapper and React with Typescript, Jest and styled-components.
the architecture is based on containers and components
inside the containers you will see the most complex business logic
and inside the comonents onlu the ui components

## Future improvements

I spent 5 hours developing this website, but i can do it better in more hours improving these things:
1 - Add e2e test repository developed on cypress f.e (i have it also)
2 - Use real data instead of mock data
3 - Make a page for each round and restore the store in order to use the nextjs pages funcitons
4 - Unit tests are fine but should be better with also e2e tests