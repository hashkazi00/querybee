export interface ICommonNavbarConfig {
  label: string;
  to: string;
  type: "dropdown" | "link";
  openInNewTab?: boolean;
}

export type TTruncateConfig =
  | {
      type?: "dropdown";
      links: ICommonNavbarConfig[];
      openInNewTab?: never;
      label: string;
    }
  | { type: "link"; links?: never; label: string };

export type TNavbarConfig = ICommonNavbarConfig & TTruncateConfig;
