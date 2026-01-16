import db from "../config/db.js";

/* =========================
   CHART PESANAN
========================= */
export const getPesananChart = (req, res) => {
  const sql = `
    SELECT 'Nebeng Motor' AS label, COUNT(*) AS total FROM booking_motor
    UNION ALL
    SELECT 'Nebeng Barang' AS label, COUNT(*) AS total FROM booking_barang
    UNION ALL
    SELECT 'Nebeng Mobil' AS label, COUNT(*) AS total FROM booking_mobil
    UNION ALL
    SELECT 'Titip Barang' AS label, COUNT(*) AS total FROM booking_titip_barang
  `;

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "gagal ambil data pesanan",
        error: err.message,
      });
    }

    res.json(result);
  });
};

/* =========================
   TRANSAKSI (SEMUA BOOKING)
========================= */
export const getAllBookingTransactions = (req, res) => {
  const sql = `
    SELECT 
      b.id,
      b.created_at AS tanggal,
      NULL AS driver,
      u.name AS customer,
      b.booking_number,
      b.status,
      'Nebeng Motor' AS jenis
    FROM booking_motor b
    JOIN users u ON u.id = b.user_id

    UNION ALL

    SELECT 
      b.id,
      b.created_at AS tanggal,
      NULL AS driver,
      u.name AS customer,
      b.booking_number,
      b.status,
      'Nebeng Barang' AS jenis
    FROM booking_barang b
    JOIN users u ON u.id = b.user_id

    UNION ALL

    SELECT 
      b.id,
      b.created_at AS tanggal,
      NULL AS driver,
      u.name AS customer,
      b.booking_number,
      b.status,
      'Nebeng Mobil' AS jenis
    FROM booking_mobil b
    JOIN users u ON u.id = b.user_id

    UNION ALL

    SELECT 
      b.id,
      b.created_at AS tanggal,
      NULL AS driver,
      u.name AS customer,
      b.booking_number,
      b.status,
      'Titip Barang' AS jenis
    FROM booking_titip_barang b
    JOIN users u ON u.id = b.user_id

    ORDER BY tanggal DESC
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        message: "gagal ambil transaksi booking",
        error: err.message,
      });
    }

    res.json(result);
  });
};
