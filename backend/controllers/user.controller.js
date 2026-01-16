import db from "../config/db.js";
import bcrypt from "bcryptjs";

export const getUserCountByRole = (req, res) => {
  const sql = `
    SELECT role, COUNT(*) AS total
    FROM users
    GROUP BY role
  `;

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    const data = {
      mitra: 0,
      customer: 0
    };

    results.forEach(row => {
      if (row.role === "mitra") data.mitra = row.total;
      if (row.role === "customer") data.customer = row.total;
    });

    res.json(data);
  });
};

export const getMitraUsers = (req, res) => {
  const sql = `
    SELECT 
      id,
      name AS nama,
      email,
      phone AS telp
    FROM users
    WHERE role = 'mitra'
    ORDER BY name ASC
  `;

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({
        message: "gagal ambil data mitra",
        error: err.message
      });
    }

    res.json(results);
  });
};

export const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "email dan password wajib diisi"
    });
  }

  const query = `
    SELECT id, name, email, password, role
    FROM users
    WHERE email = ?
    LIMIT 1
  `;

  db.query(query, [email], async (err, results) => {
    if (err) {
      return res.status(500).json({
        message: "server error"
      });
    }

    if (results.length === 0) {
      return res.status(401).json({
        message: "email tidak ditemukan"
      });
    }

    const user = results[0];

    // ❌ TOLAK JIKA BUKAN ADMIN
    if (user.role !== "admin") {
      return res.status(403).json({
        message: "akses ditolak, hanya admin yang bisa login"
      });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "password salah"
      });
    }

    // ✅ login sukses (admin)
    res.status(200).json({
      message: "login admin berhasil",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  });
};
