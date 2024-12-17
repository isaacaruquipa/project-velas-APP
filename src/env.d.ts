/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE_URL: string;
  readonly PUBLIC_STRIPE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}