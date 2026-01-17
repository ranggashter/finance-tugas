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


export const getUserById = (req, res) => {
  const { id } = req.params;

  const query = "SELECT id, name, email, role FROM users WHERE id = ? LIMIT 1";

  db.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ message: "Server error" });

    if (results.length === 0)
      return res.status(404).json({ message: "User tidak ditemukan" });

    res.status(200).json(results[0]);
  });
};

/* =========================
   GET PROFILE USER (ADMIN)
   GET /api/users/profile/:id
========================= */
export const getUserProfile = (req, res) => {
  const { id } = req.params;

  const sql = `
    SELECT
      id,
      name,
      email,
      role,
      address,
      phone,
      gender,
      profile_photo,
      created_at
    FROM users
    WHERE id = ?
    LIMIT 1
  `;

  db.query(sql, [id], (err, results) => {
    if (err) {
      return res.status(500).json({
        message: "gagal mengambil data profile",
        error: err.message
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        message: "user tidak ditemukan"
      });
    }

    res.status(200).json(results[0]);
  });
};



export const updateProfile = (req, res) => {
  const { id } = req.params;
  const { name, phone, gender, address } = req.body;

  const sql = `
    UPDATE users SET
      name = ?,
      phone = ?,
      gender = ?,
      address = ?,
      updated_at = NOW()
    WHERE id = ?
  `;

  db.query(
    sql,
    [name, phone, gender, address, id],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "gagal update profile",
          error: err.message
        });
      }

      res.json({
        message: "profile berhasil diperbarui"
      });
    }
  );
};


export const updateAccount = async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;

  if (!email && !password) {
    return res.status(400).json({
      message: "tidak ada data yang diubah"
    });
  }

  let fields = [];
  let values = [];

  // jika update email
  if (email) {
    fields.push("email = ?");
    values.push(email);
  }

  // jika update password
  if (password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    fields.push("password = ?");
    values.push(hashedPassword);
  }

  const sql = `
    UPDATE users
    SET ${fields.join(", ")},
        updated_at = NOW()
    WHERE id = ?
  `;

  values.push(id);

  db.query(sql, values, (err) => {
    if (err) {
      return res.status(500).json({
        message: "gagal update akun",
        error: err.message
      });
    }

    res.json({
      message: "email / password berhasil diperbarui"
    });
  });
};
