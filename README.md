# Testing a basic to-do-list app with passmark

## Setting up this repo

**Initialize**

```Bash
mkdir passmark-testing && cd passmark-testing
npm init -y
npm install @playwright/test passmark dotenv
npx playwright install chromium
```

**Add your API keys (.env)**

`OPENROUTER_API_KEY=sk-or-...  // free credits from hackathon registration`

**Run tests**

```Bash 
npx playwright test
```

</br>

## Testcases results

### Reports

***Sucessfull tests***

1. [Testcase-1](/tests/listado-home.spec.ts)

- Command to run the test report: `npx playwright show-report playwright-report/report-2026-05-10T15-27-48-548Z`

2. [Testcase-2](/tests/listado-basic-function.spec.ts)

- Command to run the test report: `npx playwright show-report playwright-report/report-2026-05-10T15-29-26-465Z`

3. [Testcase-3](/tests/listado-add-list.spec.ts)

- Command to run the test report: `npx playwright show-report playwright-report/report-2026-05-10T15-30-25-727Z`

4. [Testcase-4](/tests/listado-clear-list.spec.ts)

- Command to run the test report: `npx playwright show-report playwright-report/report-2026-05-10T15-31-34-487Z`


***Some Failed tests***

*Commands to run the test report:*

1. Command: `npx playwright show-report playwright-report/report-2026-05-10T10-46-12-673Z`.

2. Command: `npx playwright show-report playwright-report/report-2026-05-10T10-52-21-689Z`

3. Command: `npx playwright show-report playwright-report/report-2026-05-10T13-47-00-672Z`

---

## Links
    
1.  [App/website tested](https://listado.pnvshravan.fyi/) (Listado).
    
2.  Github [repo](https://github.com/pnvshravan/listado) of the app I tested.

3.  [X post](https://x.com/pnvshravan/status/2053541610483552677?s=20).
    
4.  [LinkedIn post](https://www.linkedin.com/posts/pnvshravan_breakingappshackathon-share-7459429448300466176-utid?utm_source=share&utm_medium=member_desktop&rcm=ACoAADesQmwBz87rLHW52p_ISwfZvS-3-clgzko).

5. Blog post on [Hashnode](https://pnvshravan786.hashnode.dev/testing-a-basic-to-do-list-app-with-passmark).