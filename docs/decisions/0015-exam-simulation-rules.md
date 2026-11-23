# 0015. Exam simulation rules

Date: 2026-11-23 · Status: accepted

## Context
The simulation must follow the Prüfungsbedingungen für den IT-Grundschutz-Praktiker v2.2 (23.06.2026):
- 50 questions (§4), four statements each, of which 0–4 may be correct
- 60 minutes, and the time keeps running during absence (§3)
- all-or-nothing scoring and 30 correct to pass (§9)
- questions drawn per topic by Tabelle 2 (§6), different questions on a retake (§9)

Tabelle 2 adds up to only **49** questions (2+2+2+2+2+8+3+5+5+5+3+2+3+3+2), while §4 and §9 require 50.

## Decision
- Draw per topic exactly as in Tabelle 2, then add **one random question from the rest of the pool** to reach 50. The pass mark stays 30/50.
- Questions used in earlier simulations are drawn last, so a retake gets new questions as long as the pool allows.
- The deadline is wall-clock based and persisted, so the exam is handed in automatically even after a reload or app close.
- A question without any tick counts as "keine Aussage richtig".
- No feedback during the exam. The result shows a per-topic score and a review with explanation and source.
- The timer shows whole minutes and refreshes every 15 s to spare e-ink screens.

## Consequences
The per-topic counts can differ from Tabelle 2 by one question. If the BSI corrects the table, only `examCount` in `topics.constants.ts` changes.
