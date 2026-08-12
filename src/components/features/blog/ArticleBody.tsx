import type { ReactNode } from "react";
import Link from "next/link";
import type { ContentBlock } from "./articulos";

/**
 * Sintaxis liviana dentro del texto de un bloque: `**negrita**` y
 * `[texto](/ruta)`. No es Markdown completo a propósito — el contenido es
 * estático y curado a mano, no hace falta un parser completo.
 */
function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const regex = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    if (match[1] !== undefined) {
      nodes.push(<strong key={keyPrefix + i++}>{match[1]}</strong>);
    } else {
      nodes.push(
        <Link
          key={keyPrefix + i++}
          href={match[3]}
          className="text-primary underline underline-offset-2 hover:text-primary-hover"
        >
          {match[2]}
        </Link>
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

export function ArticleBody({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, i) => {
        const key = "b" + i;
        if (block.type === "h2") {
          return (
            <h2 key={key} className="mt-4 text-2xl font-semibold text-balance sm:text-3xl">
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3 key={key} className="mt-2 text-lg font-semibold sm:text-xl">
              {block.text}
            </h3>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={key} className="flex flex-col gap-2 pl-5 text-base leading-relaxed text-text-secondary">
              {block.items.map((item, j) => (
                <li key={j} className="list-disc marker:text-primary">
                  {renderInline(item, key + "i" + j)}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={key} className="text-base leading-relaxed text-text-secondary">
            {renderInline(block.text, key)}
          </p>
        );
      })}
    </div>
  );
}
