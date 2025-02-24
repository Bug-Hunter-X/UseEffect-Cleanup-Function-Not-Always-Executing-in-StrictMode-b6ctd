# useEffect Cleanup Function Not Always Executing in StrictMode

This repository demonstrates a subtle issue with useEffect cleanup functions in React 18 and 19 when StrictMode is enabled.  Under certain conditions, particularly rapid unmounting, the cleanup function might not execute, leading to unexpected side effects or missing console logs.

## Problem Description

The `useEffect` hook with a cleanup function is expected to run the cleanup logic when the component unmounts. However, when StrictMode is enabled and the component unmounts very quickly (e.g., due to rapid state changes), there is a chance the cleanup function might not be called.  This behavior is more pronounced in React 18 and 19.

## Solution

The problem is due to StrictMode's double-rendering behaviour, and there is no guaranteed way to execute the cleanup function perfectly in all scenarios. However, refactoring code to minimise unnecessary state changes, and removing unnecessary effect dependencies, may mitigate it. If strict reliance on cleanup actions is needed, consider using the `useUnmount` hook.