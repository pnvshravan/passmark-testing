import {test, expect} from "@playwright/test";
import { runSteps} from "passmark";


// Test 4: Check the page behaviour for clearing the list items.
test("Clear the list item, and check the All filter", async ({page}) => {
    test.setTimeout(60_000); 
    await runSteps({
        page,
        userFlow: "Clear a task item and verify it in All filter",
        steps:[
            {description: "Navigate to https://listado.pnvshravan.fyi/" },
            {description: "Add a task namely drink water into input field and click on Add button"},
            {description: "Click on the checkbox of task list item with text drink water"},
        ],
        assertions:[
            {assertion: "the list item with text as drink water appears as striken out, with a tick on left side"},
            {assertion: "The tasks left counter shows 0 in the footer"},
            {assertion: "The clear completed button appears on the footer"}
        ],
        test,
        expect,
    });
});

test("Verify the cleared task in Active filter", async ({page}) => {
    test.setTimeout(60_000); 
    await runSteps({
        page,
        userFlow: "Verify task appears in Active filter",
        steps:[
            {description: "Navigate to https://listado.pnvshravan.fyi/" },
            {description: "Add a task namely drink water into input field and click on Add button"},
            {description: "Click on the checkbox of task list item with text drink water"},
            {description: "Click the Active filter button to switch to Active tab"},
        ],
        assertions:[
            {assertion: "No list items appear in Active tab"},
            {assertion: "The tasks left counter shows 0 in the footer"},
            {assertion: "The clear completed button appears on the footer"}
        ],
        test,
        expect,
    });
});

test("Verify the cleared task in Completed filter", async ({page}) => {
    test.setTimeout(60_000); 
    await runSteps({
        page,
        userFlow: "Verify Completed filter shows no tasks",
        steps:[
            {description: "Navigate to https://listado.pnvshravan.fyi/" },
            {description: "Add a task namely drink water into input field and click on Add button"},
            {description: "Click on the checkbox of task list item with text drink water"},
            {description: "Click the Completed filter button to switch to Completed tab"},
        ],
        assertions:[
            {assertion: "the list item with text as drink water appears as striken out, with a tick on left side"},
            {assertion: "The tasks left counter shows 0 in the footer"},
            {assertion: "The clear completed button appears on the footer"}
        ],
        test,
        expect,
    });
});

