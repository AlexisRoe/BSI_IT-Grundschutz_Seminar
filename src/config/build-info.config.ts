/** Build metadata injected by Vite at build time (see `define` in vite.config.ts). */
export interface BuildInfo {
  title: string;
  version: string;
  commit: string;
  builtAt: string;
}

declare const __BUILD_INFO__: BuildInfo;

/** Metadata of the running build: app title, package version, commit hash and build time. */
export const BUILD_INFO: BuildInfo = __BUILD_INFO__;
