import { Fragment } from "react";
import { Highlight } from "@/ui";

/** Splits `**bold**` markup into plain and emphasised segments. */
export function parseRichText(text: string): { text: string; strong: boolean }[] {
  return text
    .split(/(\*\*[^*]+\*\*)/g)
    .filter((part) => part.length > 0)
    .map((part) =>
      part.startsWith("**") && part.endsWith("**") && part.length > 4
        ? { text: part.slice(2, -2), strong: true }
        : { text: part, strong: false },
    );
}

/**
 * Renders text with `**bold**` emphasis as library highlights; never as HTML.
 * The single wrapping span keeps the text in one inline flow inside flex containers such as list items.
 */
export function RichText({ text }: { text: string }) {
  return (
    <span>
      {parseRichText(text).map((seg, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: segments are static and positional
        <Fragment key={i}>{seg.strong ? <Highlight>{seg.text}</Highlight> : seg.text}</Fragment>
      ))}
    </span>
  );
}
