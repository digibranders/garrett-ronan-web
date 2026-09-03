/**
 * Renders a JSON-LD block. Schema payloads are built on the server from static
 * site data, never from user input.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Schema.org payloads are static objects defined in src/lib/schema.ts.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
