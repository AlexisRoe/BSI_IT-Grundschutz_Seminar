import { useState } from "react";
import type { LabTask } from "@/content/course.types";
import {
  Alert,
  Button,
  Flex,
  List,
  ListItem,
  OrderList,
  Pill,
  RichText,
  scramble,
  Text,
} from "@/ui";
import { scoreOrder } from "./lab.utils";

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
      <OrderList
        items={order}
        onChange={setOrder}
        getKey={(item) => item.id}
        disabled={checked}
        labels={{
          moveUp: (item) => `${item.label} nach oben`,
          moveDown: (item) => `${item.label} nach unten`,
        }}
        renderItem={(item) => (
          <Flex column>
            <Text>{item.label}</Text>
            {item.detail && <Text>{item.detail}</Text>}
          </Flex>
        )}
        renderSuffix={(item, i) => {
          if (!checked) return null;
          const right = task.items[i]?.id === item.id;
          return <Pill icon={right ? "check" : "close"}>{right ? "richtig" : "falsch"}</Pill>;
        }}
      />
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
