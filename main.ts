import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE_OPEN = "I bought a twelve-pack of pencils. ";
const JOKE_MIDDLE = "Eleven are pointless. ";
const JOKE_CLOSE = "The last one makes the point.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const OUTPUT_PATH = join(OUTPUT_DIR, OUTPUT_FILE);

const entry = JOKE_OPEN + JOKE_MIDDLE + JOKE_CLOSE;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, entry, "utf8");
