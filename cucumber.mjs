import { loadConfiguration } from '@cucumber/cucumber/api';
import { runCucumber } from '@cucumber/cucumber/api';

const config = await loadConfiguration(); // ok com ESM + Node 18+

await runCucumber(config);
