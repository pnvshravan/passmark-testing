import { defineConfig, devices } from '@playwright/test';
import { configure } from "passmark";

import dotenv from 'dotenv';
import path from 'path';

// Load .env file
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

// configure passmark
configure({
  ai: {
    gateway: "openrouter",
  }
});


// Generate a unique identifier based on current date and time
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  // 1. Save screenshots, videos, and traces in a unique folder per run
  outputDir: `test-results/run-${timestamp}`,

  reporter: [
    ['list'],
    // 2. Save the HTML report in a unique folder
    ['html', { 
      outputFolder: `playwright-report/report-${timestamp}`,
      open: 'never' 
    }],
    // Example of saving a JSON report with a unique name
    ['json', { outputFile: `test-results/results-${timestamp}.json` }]
  ],
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
    headless: !!process.env.CI,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
  // webServer: {
  //   command: 'npm run dev',
  //   url: 'http://localhost:5173',
  //   reuseExistingServer: !process.env.CI,
  // },
});
