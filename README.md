# Have You Tried Turning It Off?

[![make.fun · u-motasimfuad-have-you-tried-turning-it-off-154a938b](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![rank](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/Ipan8/makefun-have-you-tried-turning-it-off-01/rank.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![reward](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/Ipan8/makefun-have-you-tried-turning-it-off-01/reward.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-have-you-tried-turning-it-off-154a938b)

## The line

> Ticket #4821, third reboot today: the screen says 'contact support', and I am support, so I'll just sit here with you until one of us cries first.

## Why this line

It never says the first-idea phrase "turn it off and on again" — the
reboot is background ("third reboot today"), not the joke. The joke is the
loop: the screen tells the customer to contact support, and the person
reading the screen IS support. The agent is active (he did the three
reboots) and the punchline escalates instead of wordplay: troubleshooting
is over, what is left is two humans sitting together until one of them
cries. Concrete details a judge can hold onto: a ticket number (#4821), a
count (third reboot), a quoted screen message. 146 characters, one line —
every word earns its place. Built for the brief's pairwise blind judge:
the line has to win on the first read, with no setup to remember.

## How it works

`main.ts` (Node 22) writes the line to `/output/entry.txt`. The output
is fully deterministic: a constant string, no randomness, no network, no
clock. The program enforces the bounty's gate itself — 1 to 200 characters,
a single line, not only whitespace — and throws otherwise.
