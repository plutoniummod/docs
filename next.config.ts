import { createMDX } from 'fumadocs-mdx/next';
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';

import type { NextConfig } from 'next';

const withMDX = createMDX();

const config: NextConfig = {
  reactStrictMode: true,

  // static export
  // output: 'export',
};

export default withMDX(config);

initOpenNextCloudflareForDev();
