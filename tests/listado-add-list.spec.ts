import {test, expect} from "@playwright/test";
import { runSteps} from "passmark";


// Test 3: Check if the page, shows up newly added list items.
test("Adding a new list item and verifying filter states", async ({page}) => {
    test.setTimeout(60_000); 
    await runSteps({
        page,
        userFlow: "Add a task and verify it appears in All filter",
        steps:[
            {description: "Navigate to https://listado.pnvshravan.fyi/" },
            {description: "Add a task namely drink water into input field and click on Add button"},
        ],
        assertions:[
            {assertion: "the list item with text as drink water appears with a checkbox on its left in All filter"},
            {assertion: "The tasks left counter shows 1"},
        ],
        test,
        expect,
    });
});

test("Verify task in Active filter", async ({page}) => {
    test.setTimeout(60_000); 
    await runSteps({
        page,
        userFlow: "Verify task appears in Active filter",
        steps:[
            {description: "Navigate to https://listado.pnvshravan.fyi/" },
            {description: "Add a task namely drink water into input field and click on Add button"},
            {description: "Click the Active filter button to switch to Active tab"},
        ],
        assertions:[
            {assertion: "the task 'drink water' is displayed in the Active filter"},
        ],
        test,
        expect,
    });
});

test("Verify Completed filter is empty", async ({page}) => {
    test.setTimeout(60_000); 
    await runSteps({
        page,
        userFlow: "Verify Completed filter shows no tasks",
        steps:[
            {description: "Navigate to https://listado.pnvshravan.fyi/" },
            {description: "Add a task namely drink water into input field and click on Add button"},
            {description: "Click the Completed filter button to switch to Completed tab"},
        ],
        assertions:[
            {assertion: "the Completed filter displays an empty state message"},
        ],
        test,
        expect,
    });
});