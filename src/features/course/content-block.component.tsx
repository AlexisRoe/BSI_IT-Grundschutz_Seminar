import type { ContentBlock } from "@/content/course.types";
import { Alert, Card, Flex, Link, List, ListItem, RichText, Table, Text, Title } from "@/ui";

/** Renders one lesson content block with library components. */
export function ContentBlockView({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <Title size="3" className="section-title">
          {block.text}
        </Title>
      );
    case "paragraph":
      return (
        <Text>
          <RichText text={block.text} />
        </Text>
      );
    case "list":
      return (
        <List as={block.ordered ? "ordered" : "unordered"}>
          {block.items.map((item) => (
            <ListItem key={item}>
              <RichText text={item} />
            </ListItem>
          ))}
        </List>
      );
    case "table":
      return (
        <Flex column gap="sm">
          <Table wrap>
            <Table.Head>
              {block.headers.map((h) => (
                <Table.HeaderCell key={h}>{h}</Table.HeaderCell>
              ))}
            </Table.Head>
            <Table.Body>
              {block.rows.map((row) => (
                <Table.Row selectable={false} key={row.join("|")}>
                  {row.map((cell, i) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: cells are positional
                    <Table.Cell key={i}>
                      <RichText text={cell} />
                    </Table.Cell>
                  ))}
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          {block.caption && <Text>{block.caption}</Text>}
        </Flex>
      );
    case "definition":
      return (
        <Flex column gap="sm">
          <Title size="4">{block.term}</Title>
          <Text>
            <RichText text={block.text} />
          </Text>
        </Flex>
      );
    case "callout":
      return (
        <Alert
          variant={block.variant === "merke" ? "info" : "warning"}
          icon={block.variant === "merke" ? "star" : "info-circle"}
          title={`${block.variant === "merke" ? "Merke" : "Hinweis"}: ${block.title}`}
          description={<RichText text={block.text} />}
        />
      );
    case "example": {
      const lines = Array.isArray(block.text) ? block.text : [block.text];
      return (
        <Card>
          <Card.Header>
            <Card.Title>Beispiel: {block.title}</Card.Title>
          </Card.Header>
          <Card.Content>
            {lines.map((line) => (
              <Text key={line}>
                <RichText text={line} />
              </Text>
            ))}
          </Card.Content>
        </Card>
      );
    }
    case "praxis":
      return (
        <Card>
          <Card.Header>
            <Card.Title>Praxis 2026: {block.title}</Card.Title>
            <Card.Subtitle>Nicht prüfungsrelevant – Zusatzwissen</Card.Subtitle>
          </Card.Header>
          <Card.Content>
            <Text>
              <RichText text={block.text} />
            </Text>
            <Text>
              Quelle: <Link href={block.source.url}>{block.source.label}</Link> (Stand{" "}
              {block.source.date})
            </Text>
          </Card.Content>
        </Card>
      );
  }
}
