import {test, expect} from "@playwright/test";
import { runSteps} from "passmark";


// Test 2: Check if basic functions are working.

test("Basic functionalites", async ({page}) => {
    test.setTimeout(80_000); 
    await runSteps({
        page,
        userFlow: "Check the homepage for basic functionality",
        steps:[
            {description: "Navigate to https://listado.pnvshravan.fyi/" },
            {description: "click on theme toggle in the header section"},
            {description: "click on Add button of the input field"},
            {description: "click on the each tab under the input field on by one (all three of them)"},
            
        ],
        assertions:[
            {assertion: "The theme changes to light mode, and see if the toggle is labeled as Switch to dark mode"},
            // {assertion: "the input field will make a animation similar to a shake on empty task, when tried to add it"},
            {assertion: "Each tab is highlighed based on the click"},
        ],
        test,
        expect,
    });
});
