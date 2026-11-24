import { useState } from "react";
import type { LabTask } from "@/content/course.types";
import { Alert, Button, Flex, List, ListItem, Pill, RichText, Text } from "@/ui";
import { move, scoreOrder, scramble } from "./lab.utils";

/** Props of {@link OrderTask}. */
export interface OrderTaskProps {
  task: Extract<LabTask, { kind: "order" }>;
  onChecked: (score: number) => void;
}

/** Bring the items into the correct sequence using up/down buttons. */
export function OrderTask({ task, onChecked }: OrderTaskProps) {
  const [order, setOrder] = useState(() => scramble(task.items));
  const [checked, setChecked] = useState(false);
  const score = scoreOrder(
    task,
    order.map((i) => i.id),
  );

  return (
    <Flex column gap="md">
      <Text>
        <RichText text={task.prompt} />
      </Text>
      {order.map((item, i) => (
        <Flex row gap="sm" align="center" key={item.id}>
          <Pill>{i + 1}</Pill>
          <Flex column className="grow">
            <Text>{item.label}</Text>
            {item.detail && <Text>{item.detail}</Text>}
          </Flex>
          {checked ? (
            <Pill icon={task.items[i]?.id === item.id ? "check" : "close"}>
              {task.items[i]?.id === item.id ? "richtig" : "falsch"}
            </Pill>
          ) : (
            <>
              <Button.IconOutlined
                icon="arrow-up"
                aria-label={`${item.label} nach oben`}
                disabled={i === 0}
                onClick={() => setOrder((o) => move(o, i, -1))}
              />
              <Button.IconOutlined
                icon="arrow-down"
                aria-label={`${item.label} nach unten`}
                disabled={i === order.length - 1}
                onClick={() => setOrder((o) => move(o, i, 1))}
              />
            </>
          )}
        </Flex>
      ))}
      {checked ? (
        <>
          <Alert
            variant={score === task.items.length ? "info" : "warning"}
            title={`${score} von ${task.items.length} Positionen richtig`}
            description={task.explanation}
          />
          <Text>Richtige Reihenfolge:</Text>
          <List as="ordered">
            {task.items.map((item) => (
              <ListItem key={item.id}>{item.label}</ListItem>
            ))}
          </List>
        </>
      ) : (
        <Button
          onClick={() => {
            setChecked(true);
            onChecked(score);
          }}
        >
          Auswerten
        </Button>
      )}
    </Flex>
  );
}
