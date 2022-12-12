import { type Writable, writable } from "svelte/store";
import type { Time } from "./types";

const generate = writable(false);
const type: Writable<"fallAsleep" | "wakeUp"> = writable();
const fallAsleep: Writable<Time[]> = writable();
const wakeUp: Writable<Time[]> = writable();

export { generate, type, fallAsleep, wakeUp };
