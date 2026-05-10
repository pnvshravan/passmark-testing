# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: listado-clear-list.spec.ts >> Verify the cleared task in Completed filter
- Location: tests/listado-clear-list.spec.ts:47:1

# Error details

```
StepExecutionError: 
User not found.
Step: Navigate to https://listado.pnvshravan.fyi/
```

# Test source

```ts
  1  | import {test, expect} from "@playwright/test";
  2  | import { runSteps} from "passmark";
  3  | 
  4  | 
  5  | // Test 4: Check the page behaviour for clearing the list items.
  6  | test("Clear the list item, and check the All filter", async ({page}) => {
  7  |     test.setTimeout(60_000); 
  8  |     await runSteps({
  9  |         page,
  10 |         userFlow: "Clear a task item and verify it in All filter",
  11 |         steps:[
  12 |             {description: "Navigate to https://listado.pnvshravan.fyi/" },
  13 |             {description: "Add a task namely drink water into input field and click on Add button"},
  14 |             {description: "Click on the checkbox of task list item with text drink water"},
  15 |         ],
  16 |         assertions:[
  17 |             {assertion: "the list item with text as drink water appears as striken out, with a tick on left side"},
  18 |             {assertion: "The tasks left counter shows 0 in the footer"},
  19 |             {assertion: "The clear completed button appears on the footer"}
  20 |         ],
  21 |         test,
  22 |         expect,
  23 |     });
  24 | });
  25 | 
  26 | test("Verify the cleared task in Active filter", async ({page}) => {
  27 |     test.setTimeout(60_000); 
  28 |     await runSteps({
  29 |         page,
  30 |         userFlow: "Verify task appears in Active filter",
  31 |         steps:[
  32 |             {description: "Navigate to https://listado.pnvshravan.fyi/" },
  33 |             {description: "Add a task namely drink water into input field and click on Add button"},
  34 |             {description: "Click on the checkbox of task list item with text drink water"},
  35 |             {description: "Click the Active filter button to switch to Active tab"},
  36 |         ],
  37 |         assertions:[
  38 |             {assertion: "No list items appear in Active tab"},
  39 |             {assertion: "The tasks left counter shows 0 in the footer"},
  40 |             {assertion: "The clear completed button appears on the footer"}
  41 |         ],
  42 |         test,
  43 |         expect,
  44 |     });
  45 | });
  46 | 
  47 | test("Verify the cleared task in Completed filter", async ({page}) => {
  48 |     test.setTimeout(60_000); 
> 49 |     await runSteps({
     |     ^ StepExecutionError: 
  50 |         page,
  51 |         userFlow: "Verify Completed filter shows no tasks",
  52 |         steps:[
  53 |             {description: "Navigate to https://listado.pnvshravan.fyi/" },
  54 |             {description: "Add a task namely drink water into input field and click on Add button"},
  55 |             {description: "Click on the checkbox of task list item with text drink water"},
  56 |             {description: "Click the Completed filter button to switch to Completed tab"},
  57 |         ],
  58 |         assertions:[
  59 |             {assertion: "the list item with text as drink water appears as striken out, with a tick on left side"},
  60 |             {assertion: "The tasks left counter shows 0 in the footer"},
  61 |             {assertion: "The clear completed button appears on the footer"}
  62 |         ],
  63 |         test,
  64 |         expect,
  65 |     });
  66 | });
  67 | 
  68 | 
```