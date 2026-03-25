import initSqlJs from 'sql.js';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dataDir = join(__dirname, 'data');
if (!existsSync(dataDir)) {
  mkdirSync(dataDir, { recursive: true });
}

const dbPath = join(dataDir, 'workshop.db');

const SQL = await initSqlJs();

let db;
if (existsSync(dbPath)) {
  const buffer = readFileSync(dbPath);
  db = new SQL.Database(buffer);
} else {
  db = new SQL.Database();
}

db.run(`
  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    author TEXT NOT NULL,
    title TEXT NOT NULL,
    html TEXT NOT NULL,
    votes INTEGER DEFAULT 0,
    voters TEXT DEFAULT '[]',
    comments TEXT DEFAULT '[]',
    created_at TEXT DEFAULT (datetime('now')),
    author_id TEXT DEFAULT '',
    event_id TEXT DEFAULT 'workshop'
  )
`);

// Migrate: add columns if missing (old databases)
try {
  const cols = db.exec("PRAGMA table_info(projects)")[0]?.values.map(r => r[1]) || [];
  let migrated = false;
  if (!cols.includes("author_id")) {
    db.run("ALTER TABLE projects ADD COLUMN author_id TEXT DEFAULT ''");
    migrated = true;
  }
  if (!cols.includes("event_id")) {
    db.run("ALTER TABLE projects ADD COLUMN event_id TEXT DEFAULT 'workshop'");
    migrated = true;
  }
  if (migrated) save();
} catch { /* columns already exist or table is fresh */ }

function save() {
  const data = db.export();
  const buffer = Buffer.from(data);
  writeFileSync(dbPath, buffer);
}

function runQuery(sql, params = []) {
  const stmt = db.prepare(sql);
  if (params.length > 0) stmt.bind(params);
  const rows = [];
  while (stmt.step()) {
    rows.push(stmt.getAsObject());
  }
  stmt.free();
  return rows;
}

const wrapper = {
  prepare(sql) {
    return {
      all(...params) {
        return runQuery(sql, params);
      },
      get(...params) {
        const rows = runQuery(sql, params);
        return rows[0] || null;
      },
      run(...params) {
        db.run(sql, params);
        save();
        const result = runQuery("SELECT last_insert_rowid() as id");
        return {
          lastInsertRowid: result[0]?.id,
        };
      },
    };
  },
};

export default wrapper;
