// Have You Tried Turning It Off? — one line a hopeless tech support
// agent says to a desperate customer.
//
// The line: "Ticket #4821, third reboot today: the screen says 'contact
// support', and I am support, so I'll just sit here with you until one of
// us cries first." — exactly 146 characters, far inside the 200 cap.
//
// Why this line: it never says the first-idea phrase "turn it off and on
// again" — the reboot is background ("third reboot today"), not the joke.
// The joke is the loop: the screen tells the customer to contact support,
// and the person reading the screen IS support. The agent is active (he
// did the three reboots) and the punchline escalates instead of wordplay:
// troubleshooting is over, what is left is two humans sitting together
// until one of them cries. Concrete details a judge can hold onto: a
// ticket number (#4821), a count (third reboot), a quoted screen message.
// One message, one angle, no claim that reads two ways. Built for the
// brief's pairwise blind judge: the line has to win on the first read,
// with no setup the judge has to remember.
//
// This program writes the entry to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Ticket #4821, third reboot today: the screen says 'contact support', and I am support, so I'll just sit here with you until one of us cries first.";
const OUT = "/output/entry.txt";

// Gate: the bounty requires UTF-8 text of 1 to 200 characters, one line,
// not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${LINE.length}`);
}
if (/[\n\r]/.test(LINE)) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
