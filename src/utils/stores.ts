import { type Writable, writable } from "svelte/store";
import type { Time } from "./types";

const generate = writable(false);
const type: Writable<"fallAsleep" | "wakeUp"> = writable();
const hour: Writable<string> = writable();
const minute: Writable<string> = writable();
const fallAsleep: Writable<Time[]> = writable();
const wakeUp: Writable<Time[]> = writable();
const christmas: Writable<boolean> = writable(false);

export { generate, type, hour, minute, fallAsleep, wakeUp, christmas };
