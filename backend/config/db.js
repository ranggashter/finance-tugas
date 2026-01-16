import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nebeng_bro"
});

db.connect(err => {
  if (err) {
    console.error("❌ database gagal terhubung:", err.message);
  } else {
    console.log("✅ database berhasil terhubung");
  }
});

export default db;
