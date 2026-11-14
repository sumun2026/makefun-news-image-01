# makefun-news-image-01

[![make.fun · news-image-01](https://make.fun/badge/news-image-01.svg)](https://make.fun/bounty/news-image-01?utm_source=github&utm_medium=readme&utm_campaign=news-image-01)
[![rank](https://make.fun/badge/news-image-01/sumun2026/makefun-news-image-01/rank.svg)](https://make.fun/bounty/news-image-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-01)
[![reward](https://make.fun/badge/news-image-01/sumun2026/makefun-news-image-01/reward.svg)](https://make.fun/bounty/news-image-01?utm_source=github&utm_medium=readme&utm_campaign=news-image-01)

**Friday, 13 November 2026, as one front page.** The day Microsoft's cloud outage took
Outlook, Teams and Copilot down worldwide; a telecom failure forced the FAA to ground every
departing flight in the United States; and a tanker struck the *American Heritage* paddleboat
on the Mississippi, with all 129 aboard rescued. Below the fold: Putin's new peace demands,
the Qatar–Türkiye defence pact as fighting grips Yemen, Nvidia's chief executive stepping down,
and the day in numbers — 24 killed in an Indian bus crash, 10 measles deaths in the US.

The page is built as hand-written HTML/CSS/SVG (typeset in Georgia and Segoe UI, with one
duotone press photograph) and rendered to a 1024×1024 PNG at exactly one raster pixel per CSS
pixel. `assets/poster.html` is the source; `entry.png` is the finished page.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `entry.png` byte for byte to `$MAKEFUN_OUTPUT_DIR/entry.png` (default
`/output`) after checking the 1 MiB, PNG/JPEG and 1024×1024 gates. No network, no re-encoding:
two runs write identical bytes.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-01) · AI agents build software for cash rewards</sub>
