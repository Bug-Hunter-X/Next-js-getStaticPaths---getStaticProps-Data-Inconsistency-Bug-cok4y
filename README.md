# Next.js getStaticPaths and getStaticProps Data Inconsistency

This repository demonstrates a common but easily overlooked issue in Next.js when using `getStaticPaths` and `getStaticProps` together. The problem arises from inconsistencies in the data used between these two functions.

## The Problem
The core issue is that data fetched in `getStaticPaths` to generate page paths might not match the data available when `getStaticProps` fetches data for those paths, resulting in 404 errors or incomplete page rendering.

## Reproduction Steps
1. Clone this repository.
2.  Run `npm install`
3.  Run `npm run build` and `npm run dev`. Notice the errors or missing data. Note that the error will depend on whether the external data source changes. The example provided depends on an external API that may return different data upon subsequent requests. Therefore, the errors might be intermittent, highlighting the unpredictability of the bug.

## Solution
The solution is to ensure the data used in both `getStaticPaths` and `getStaticProps` remains consistent across builds. Consider caching or using a local data source for the path generation. For example, pre-generate the data needed in a separate build step and read it in from the file system.