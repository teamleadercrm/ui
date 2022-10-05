import { create } from '@storybook/theming';
import { COLOR } from '../src/constants';
import pkg from '../package.json';

const theme = create({
  base: 'light',
  brandImage:
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU1IiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTU1IDMyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzMuMDMyOCAyMS43ODEyQzczLjkyMjcgMjMuMDYyNSA3NC4xMTMzIDI0LjQwNjIgNzQuMDgxNiAyNS44NzVDNzQuMDgxNiAyNS44NzUgNzQuMDQ5OCAyNi40Mzc1IDc0LjA0OTggMjYuNjU2Mkg2NS45MTM4QzY1Ljg4MjEgMjcuNTYyNSA2Ni4xOTk5IDI4LjQzNzUgNjYuODAzNyAyOC45Njg3QzY3LjIxNjkgMjkuMzQzNyA2Ny44MjA3IDI5LjY4NzUgNjguNjE1MiAyOS42ODc1QzY5LjQ0MTUgMjkuNjg3NSA2OS45ODE4IDI5LjUzMTIgNzAuMzk1IDI5LjEyNUM3MC41ODU2IDI4LjkzNzUgNzAuNzEyOCAyOC43MTg3IDcwLjgzOTkgMjguNDM3NUw3My4wNjQ2IDI5LjcxODdMNzMuMTI4MSAyOS43ODEyQzczLjAwMSAzMCA3Mi44NzM5IDMwLjE1NjIgNzIuNzQ2NyAzMC4zMTI1QzcxLjY5OCAzMS41IDcwLjE3MjUgMzEuOTY4NyA2OC42MTUyIDMxLjk2ODdDNjYuOTMwOCAzMS45Njg3IDY1LjY5MTQgMzEuNDA2MiA2NC43Mzc5IDMwLjUzMTJDNjMuNTMwMyAyOS4zNzUgNjIuODYyOSAyNy43NSA2Mi44NjI5IDI1LjgxMjVDNjIuODYyOSAyMy45Mzc1IDYzLjQ2NjcgMjIuMjUgNjQuNjQyNiAyMS4wOTM3QzY1LjU2NDIgMjAuMTg3NSA2Ni44NjczIDE5LjU5MzcgNjguNTUxNyAxOS41OTM3QzcwLjM2MzIgMTkuNTkzNyA3Mi4wMTU4IDIwLjMxMjUgNzMuMDMyOCAyMS43ODEyWk02NS44MTg1IDI0LjYyNUg3MS4xMjU5QzcxLjA5NDEgMjMuNzE4NyA3MC44Mzk5IDIzLjA2MjUgNzAuMzk1IDIyLjU2MjVDNjkuOTgxOCAyMi4xNTYyIDY5LjM3OCAyMS44NzUgNjguNTE5OSAyMS44NzVDNjcuNTk4MiAyMS44NzUgNjYuODY3MyAyMi4yNSA2Ni40NTQxIDIyLjc4MTJDNjYuMDQxIDIzLjMxMjUgNjUuODUwMyAyMy44NDM3IDY1LjgxODUgMjQuNjI1WiIgZmlsbD0iIzFBMUMyMCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjEuMzU2OSAyMS43ODEyQzIyLjI0NjcgMjMuMDYyNSAyMi40Mzc0IDI0LjQwNjIgMjIuNDA1NiAyNS44NzVDMjIuNDA1NiAyNS44NzUgMjIuMzczOCAyNi40Mzc1IDIyLjQzNzQgMjYuNjU2MkgxNC4yMzc5QzE0LjIwNjEgMjcuNTYyNSAxNC41MjM5IDI4LjQzNzUgMTUuMTI3OCAyOC45Njg3QzE1LjU0MDkgMjkuMzQzNyAxNi4xNDQ4IDI5LjY4NzUgMTYuOTM5MyAyOS42ODc1QzE3Ljc2NTYgMjkuNjg3NSAxOC4zMDU5IDI5LjUzMTIgMTguNzE5IDI5LjEyNUMxOC45MDk3IDI4LjkzNzUgMTkuMDM2OCAyOC43MTg3IDE5LjE2NCAyOC40Mzc1TDIxLjM4ODYgMjkuNzE4N0wyMS40NTIyIDI5Ljc4MTJDMjEuMzI1MSAzMCAyMS4xOTggMzAuMTU2MiAyMS4wNzA4IDMwLjMxMjVDMjAuMDIyMSAzMS41IDE4LjQ5NjYgMzEuOTY4NyAxNi45MzkzIDMxLjk2ODdDMTUuMjU0OSAzMS45Njg3IDE0LjAxNTQgMzEuNDA2MiAxMy4wNjIgMzAuNTMxMkMxMS44NTQzIDI5LjM3NSAxMS4xODY5IDI3Ljc1IDExLjE4NjkgMjUuODEyNUMxMS4xODY5IDIzLjkzNzUgMTEuNzkwOCAyMi4yNSAxMi45NjY3IDIxLjA5MzdDMTMuODg4MyAyMC4xODc1IDE1LjE5MTMgMTkuNTkzNyAxNi44NzU3IDE5LjU5MzdDMTguNjg3MiAxOS41OTM3IDIwLjMzOTkgMjAuMzEyNSAyMS4zNTY5IDIxLjc4MTJaTTE0LjE3NDMgMjQuNjI1SDE5LjQ1QzE5LjQ1IDIzLjcxODcgMTkuMTY0IDIzLjA2MjUgMTguNzUwOCAyMi41NjI1QzE4LjMzNzcgMjIuMTU2MiAxNy43MzM4IDIxLjg3NSAxNi44NzU3IDIxLjg3NUMxNS45NTQxIDIxLjg3NSAxNS4yMjMxIDIyLjI1IDE0LjgxIDIyLjc4MTJDMTQuMzk2OCAyMy4zMTI1IDE0LjIwNjEgMjMuODQzNyAxNC4xNzQzIDI0LjYyNVoiIGZpbGw9IiMxQTFDMjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExMS4yNjUgMjEuNzgxMkMxMTIuMTU1IDIzLjA2MjUgMTEyLjM0NiAyNC40MDYyIDExMi4zMTQgMjUuODc1QzExMi4zMTQgMjUuODc1IDExMi4yODIgMjYuNDM3NSAxMTIuMzQ2IDI2LjY1NjJIMTA0LjE0NkMxMDQuMTE1IDI3LjU2MjUgMTA0LjQzMiAyOC40Mzc1IDEwNS4wMzYgMjguOTY4N0MxMDUuNDQ5IDI5LjM0MzcgMTA2LjA1MyAyOS42ODc1IDEwNi44NDggMjkuNjg3NUMxMDcuNjc0IDI5LjY4NzUgMTA4LjIxNCAyOS41MzEyIDEwOC42MjggMjkuMTI1QzEwOC44MTggMjguOTM3NSAxMDguOTQ1IDI4LjcxODcgMTA5LjA3MiAyOC40Mzc1TDExMS4yOTcgMjkuNzE4N0wxMTEuMzYxIDI5Ljc4MTJDMTExLjIzNCAzMCAxMTEuMTA2IDMwLjE1NjIgMTEwLjk3OSAzMC4zMTI1QzEwOS45MzEgMzEuNSAxMDguNDA1IDMxLjk2ODcgMTA2Ljg0OCAzMS45Njg3QzEwNS4xNjMgMzEuOTY4NyAxMDMuOTI0IDMxLjQwNjIgMTAyLjk3IDMwLjUzMTJDMTAxLjc2MyAyOS4zNzUgMTAxLjA5NSAyNy43NSAxMDEuMDk1IDI1LjgxMjVDMTAxLjA5NSAyMy45Mzc1IDEwMS42OTkgMjIuMjUgMTAyLjg3NSAyMS4wOTM3QzEwMy43OTcgMjAuMTg3NSAxMDUuMSAxOS41OTM3IDEwNi43ODQgMTkuNTkzN0MxMDguNTk2IDE5LjU5MzcgMTEwLjI0OCAyMC4zMTI1IDExMS4yNjUgMjEuNzgxMlpNMTA0LjA1MSAyNC42MjVIMTA5LjM1OEMxMDkuMzU4IDIzLjcxODcgMTA5LjA3MiAyMy4wNjI1IDEwOC42MjggMjIuNTYyNUMxMDguMjE0IDIyLjE1NjIgMTA3LjYxMSAyMS44NzUgMTA2Ljc1MiAyMS44NzVDMTA1LjgzMSAyMS44NzUgMTA1LjEgMjIuMjUgMTA0LjY4NyAyMi43ODEyQzEwNC4yNzQgMjMuMzEyNSAxMDQuMDgzIDIzLjg0MzcgMTA0LjA1MSAyNC42MjVaIiBmaWxsPSIjMUExQzIwIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNS41MzEyIDI5LjQzNzVWMzEuNTMxMkMzNS4wNTQ1IDMxLjc1IDM0LjgwMDIgMzEuODQzNyAzNC4wMzc1IDMxLjg3NUMzMi43NjYyIDMxLjg3NSAzMi4wNjcxIDMxLjA5MzcgMzEuOTcxNyAzMC4yMTg3QzMxLjM5OTcgMzEuMTU2MiAzMC4wMDEzIDMxLjk2ODcgMjguMjUzMyAzMS45Njg3QzI1LjMyOTUgMzEuOTY4NyAyMy44MzU4IDMwLjIxODcgMjMuODM1OCAyOC4yODEyQzIzLjgzNTggMjYuMDMxMiAyNS42NzkxIDI0Ljc1IDI3Ljk5OTEgMjQuNUwzMS41OTAzIDI0LjI1VjIzLjUzMTJDMzEuNTkwMyAyMi40Mzc1IDMxLjIwOSAyMS42ODc1IDI5LjUyNDYgMjEuNjg3NUMyOC4xNTggMjEuNjg3NSAyNy4zNjM1IDIyLjI4MTIgMjcuMjk5OSAyMy4zNzVIMjQuNDM5NkMyNC41OTg1IDIwLjc1IDI2Ljc5MTQgMTkuNTYyNSAyOS41MjQ2IDE5LjU2MjVDMzEuNjIyMSAxOS41NjI1IDMzLjQzMzYgMjAuMTg3NSAzNC4xMzI4IDIxLjk2ODdDMzQuNDUwNiAyMi43MTg3IDM0LjQ4MjQgMjMuNTYyNSAzNC40ODI0IDI0LjM0MzdWMjguNzE4N0MzNC40ODI0IDI5LjI1IDM0LjY0MTMgMjkuNDY4NyAzNS4xNDk4IDI5LjQ2ODdDMzUuMzQwNSAyOS40Njg3IDM1LjUzMTIgMjkuNDM3NSAzNS41MzEyIDI5LjQzNzVaTTI4LjQ0NCAyOS42ODc1QzMwLjI4NzMgMjkuNjg3NSAzMS41OTAzIDI4Ljc1IDMxLjU5MDMgMjdWMjYuNDY4N0wyOC40NzU4IDI2LjY4NzVDMjcuNTU0MiAyNi43NSAyNi42OTYxIDI3LjI4MTIgMjYuNjk2MSAyOC4yMTg3QzI2LjY5NjEgMjkuMTI1IDI3LjUyMjQgMjkuNjg3NSAyOC40NDQgMjkuNjg3NVoiIGZpbGw9IiMxQTFDMjAiLz48cGF0aCBkPSJNNTQuNzI2OSAyMy43MTg3VjMxLjY4NzVINTEuODAzMVYyNC4zNzVDNTEuODAzMSAyMi45Mzc1IDUxLjQyMTcgMjIuMDkzNyA0OS45MjggMjIuMDkzN0M0OC4yNDM2IDIyLjA5MzcgNDcuNTEyNiAyMy43ODEyIDQ3LjUxMjYgMjUuMjVWMzEuNjg3NUg0NC41ODg4VjI0LjM3NUM0NC41ODg4IDIyLjkzNzUgNDQuMjA3NCAyMi4wOTM3IDQyLjcxMzcgMjIuMDkzN0M0MS4wNjExIDIyLjA5MzcgNDAuMjk4MyAyMy43ODEyIDQwLjI5ODMgMjUuMjVWMzEuNjg3NUgzNy4zNzQ1VjE5Ljg3NUgzOS44MjE2TDQwLjA0NDEgMjEuNDM3NUM0MC43NDMzIDIwLjM3NSA0MS45MTkyIDE5LjU5MzcgNDMuNTQgMTkuNTkzN0M0NS4yODggMTkuNTkzNyA0Ni40NjM5IDIwLjM0MzcgNDcuMDY3NyAyMS41MzEyQzQ3Ljc5ODcgMjAuMjgxMiA0OS4xMDE3IDE5LjU5MzcgNTAuNzU0MyAxOS41OTM3QzUzLjM2MDMgMTkuNTkzNyA1NC43MjY5IDIxLjI4MTIgNTQuNzI2OSAyMy43MTg3WiIgZmlsbD0iIzFBMUMyMCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNODYuODg5MyAyOS40Mzc1VjMxLjUzMTJDODYuMzgwOCAzMS43NSA4Ni4xMjY2IDMxLjg0MzcgODUuMzYzOCAzMS43ODEyQzg0LjA5MjYgMzEuNzgxMiA4My4zOTM0IDMxIDgzLjI5ODEgMzAuMTI1QzgyLjcyNiAzMS4wNjI1IDgxLjMyNzYgMzEuODc1IDc5LjU3OTcgMzEuODc1Qzc2LjY1NTggMzEuODc1IDc1LjE2MjEgMzAuMTI1IDc1LjE2MjEgMjguMTg3NUM3NS4xNjIxIDI1LjkzNzUgNzcuMDA1NCAyNC42NTYyIDc5LjMyNTQgMjQuNUw4Mi45MTY3IDI0LjI1VjIzLjUzMTJDODIuOTE2NyAyMi40Mzc1IDgyLjUzNTMgMjEuNjg3NSA4MC44NTA5IDIxLjY4NzVDNzkuNDg0MyAyMS42ODc1IDc4LjY4OTggMjIuMjgxMiA3OC42MjYyIDIzLjM3NUg3NS43NjZDNzUuOTI0OSAyMC43NSA3OC4xMTc3IDE5LjU2MjUgODAuODUwOSAxOS41NjI1QzgyLjk0ODUgMTkuNTYyNSA4NC43NiAyMC4xODc1IDg1LjQ1OTIgMjEuOTY4N0M4NS43NzcgMjIuNzE4NyA4NS44MDg4IDIzLjU2MjUgODUuODA4OCAyNC4zNDM3VjI4LjcxODdDODUuODA4OCAyOS4yNSA4NS45OTk0IDI5LjQ2ODcgODYuNTA3OSAyOS40Njg3Qzg2LjY5ODYgMjkuNDY4NyA4Ni44ODkzIDI5LjQzNzUgODYuODg5MyAyOS40Mzc1Wk03OS44MDIxIDI5LjY4NzVDODEuNjQ1NCAyOS42ODc1IDgyLjk0ODUgMjguNzUgODIuOTQ4NSAyN1YyNi40Njg3TDc5LjgzMzkgMjYuNjg3NUM3OC45MTIzIDI2Ljc1IDc4LjA1NDIgMjcuMjgxMiA3OC4wNTQyIDI4LjIxODdDNzguMDU0MiAyOS4xMjUgNzguODgwNSAyOS42ODc1IDc5LjgwMjEgMjkuNjg3NVoiIGZpbGw9IiMxQTFDMjAiLz48cGF0aCBkPSJNMTIxLjQ2NyAxOS44MTI1VjIyLjUzMTJDMTIxLjExNyAyMi40Njg3IDEyMC43NjggMjIuNDA2MiAxMjAuNDE4IDIyLjQzNzVDMTE4LjM1MyAyMi40Mzc1IDExNy4yNzIgMjMuODQzNyAxMTcuMjcyIDI1Ljc1VjMxLjY4NzVIMTE0LjMxNlYxOS45MDYySDExNi44MjdMMTE3LjA4MSAyMS42ODc1QzExNy42NTMgMjAuMzEyNSAxMTkuMTE1IDE5Ljc1IDEyMC41NDUgMTkuNzVDMTIwLjgzNyAxOS43NSAxMjEuMTAxIDE5Ljc3NjIgMTIxLjM4OCAxOS44MDQ2QzEyMS40MTQgMTkuODA3MyAxMjEuNDQgMTkuODA5OSAxMjEuNDY3IDE5LjgxMjVaIiBmaWxsPSIjMUExQzIwIi8+PHBhdGggZD0iTTU3LjIzNzYgMTQuOTY4N0w2MC4wNjYxIDEzLjM0MzdMNjAuMTkzMyAxMy4yODEyVjI4LjE1NjJDNjAuMTkzMyAyOC44NDM3IDYwLjM1MjIgMjkuMjgxMiA2MS4zNjkyIDI5LjI4MTJDNjEuNTMzIDI5LjI4MTIgNjEuNjIzOSAyOS4yNzEgNjEuNzAxNSAyOS4yNjIyQzYxLjc1OTMgMjkuMjU1NyA2MS44MDk4IDI5LjI1IDYxLjg3NzYgMjkuMjVWMzEuNjI1QzYxLjgyNzcgMzEuNjM1MyA2MS43ODEzIDMxLjY0NSA2MS43Mzc4IDMxLjY1NDFDNjEuMjU0NiAzMS43NTQ5IDYxLjEyODYgMzEuNzgxMiA2MC41NzQ2IDMxLjc4MTJDNTguNTcyNCAzMS43ODEyIDU3LjIzNzYgMzAuODc1IDU3LjIzNzYgMjguNjI1VjE0Ljk2ODdaIiBmaWxsPSIjMUExQzIwIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05Ni4yMDExIDIwLjY4MDlDOTUuNjc3OCAyMC4wNzQ5IDk0LjU0ODcgMTkuNjI1IDkzLjAyMyAxOS42MjVDOTEuNzgzNiAxOS42MjUgOTAuNzk4NCAyMCA5MC4wMzU2IDIwLjU2MjVDODguNTczNyAyMS43MTg3IDg3Ljg0MjcgMjMuNSA4Ny44NDI3IDI1LjgxMjVDODcuODQyNyAyOC4wMzEyIDg4LjU0MTkgMjkuODEyNSA5MC4wMDM5IDMwLjkzNzVDOTAuNzY2NiAzMS41MzEyIDkxLjc4MzYgMzEuOTM3NSA5Mi45OTEzIDMxLjkzNzVDOTQuMzI2MSAzMS45Mzc1IDk1LjY5MjYgMzEuNDY4NyA5Ni40MjM2IDMwLjM3NUw5Ni42MTQzIDMxLjY1NjJIOTkuMTU2OFYxMy4yODEyTDk2LjIwMTEgMTQuOTY4N1YyMC42ODA5Wk05My41NjMzIDI5LjU2MjVDOTUuODgzMyAyOS41NjI1IDk2LjM2IDI3LjQzNzUgOTYuMzYgMjUuNzVDOTYuMzYgMjQuMDYyNSA5NS45MTUxIDIyIDkzLjU2MzMgMjEuOTY4N0M5Mi42NDE3IDIxLjk2ODcgOTIuMDA2MSAyMi4zNzUgOTEuNTkyOSAyMi45MDYyQzkwLjk4OTEgMjMuNjU2MiA5MC44MzAxIDI0LjcxODcgOTAuODMwMSAyNS43NUM5MC44MzAxIDI2Ljc4MTIgOTAuOTg5MSAyNy44NDM3IDkxLjU5MjkgMjguNjI1QzkyLjAwNjEgMjkuMTU2MiA5Mi42NDE3IDI5LjU2MjUgOTMuNTYzMyAyOS41NjI1WiIgZmlsbD0iIzFBMUMyMCIvPjxwYXRoIGQ9Ik0xMi45MzQ5IDE1LjYyNVYxOC4zNDM4SDcuOTc3MDNWMzEuNjg3NUg0Ljk1Nzg0VjE4LjM0MzhIMFYxNS42MjVIMTIuOTM0OVoiIGZpbGw9IiMxQTFDMjAiLz48cGF0aCBkPSJNMTQ2IDE4TDEzNCAwVjI2TDE0NiAxOFoiIGZpbGw9IiMwMEIyQjIiLz48cGF0aCBkPSJNMTQ2LjgzMiAxNy40NDUzTDE1NSAxMkgxNDMuMjAyTDE0Ni44MzIgMTcuNDQ1M1oiIGZpbGw9IiMwMEIyQjIiLz48cGF0aCBkPSJNMTEzIDEzTDEzMyA0Ljc2ODM3ZS0wNlYxM0gxMTNaIiBmaWxsPSIjMDBCMkIyIi8+PHBhdGggZD0iTTEyNSAxNEwxMzMgMjZWMTRIMTI1WiIgZmlsbD0iIzAwQjJCMiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAwIj48cGF0aCBkPSJNMCAwSDE1NVYzMkgwVjBaIiBmaWxsPSJ3aGl0ZSIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==',
  brandTitle: `AHOY Version ${pkg.version}`,
  fontBase: '"Inter", trebuchet ms, Verdana, "Arial", sans-serif',
  colorPrimary: COLOR.TEAL.DARKEST,
  colorSecondary: COLOR.MINT.NORMAL,
  textColor: COLOR.TEAL.DARKEST,
  barTextColor: COLOR.TEAL.DARKEST,
  barSelectedColor: COLOR.MINT.NORMAL,
  barBg: COLOR.NEUTRAL.LIGHTEST,
  inputBg: COLOR.NEUTRAL.LIGHTEST,
  inputBorder: COLOR.NEUTRAL.DARK,
  inputTextColor: COLOR.TEAL.DARKEST,
});

export default theme;
