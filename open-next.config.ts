import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Every page is rendered per request (the view depends on the prep cookie), so
// there's nothing to cache between requests and no R2 incremental cache.
export default defineCloudflareConfig({});
