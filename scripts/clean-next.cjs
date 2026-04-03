const fs = require("fs");
const path = require("path");

const nextDir = path.join(__dirname, "..", ".next");

try {
  if (fs.existsSync(nextDir)) {
    fs.rmSync(nextDir, { recursive: true, force: true });
  }
} catch (err) {
  console.warn("[clean-next] No se pudo borrar .next:", err.message);
  process.exit(1);
}
