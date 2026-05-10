import {test, expect} from "@playwright/test";
import { runSteps} from "passmark";


// Test 1: Check if homepage loads properly.
test("Homepage loading", async ({page}) => {
    test.setTimeout(80_000); 
    await runSteps({
        page,
        userFlow: "Check the homepage for basic elements",
        steps:[
            {description: "Navigate to https://listado.pnvshravan.fyi/" },
        ],
        assertions:[
            {assertion: "The app title is Listado under header part of the page"},
            {assertion: "theme will be in dark mode when page loads for first time"},
            {assertion: "a toggle to switch the theme should appear to the right "},
            {assertion: "A input field appears along with a button named Add to add new task"},
            {assertion:"Three tab buttons appear just below the input field"},
            {assertion:"The text All clear appears just below the tab buttons, if there are no tasks added yet"},
            {assertion: "The tasks left are 0 initially"},
        ],
        test,
        expect,
    });
});
