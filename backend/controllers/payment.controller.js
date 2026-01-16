import db from "../config/db.js";

export const getPendapatan = (req, res) => {
  const sql = `
    SELECT SUM(total_amount) AS pendapatan
    FROM payments
    WHERE status = 'paid'
  `;

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "gagal mengambil data",
        error: err.message
      });
    }

    res.json({
      pendapatan: result[0].pendapatan || 0
    });
  });
};


export const getPendapatanChart = (req, res) => {
  const sql = `
    SELECT 
      MONTH(paid_at) AS month,
      DATE_FORMAT(paid_at, '%b') AS month_name,
      SUM(total_amount) AS total
    FROM payments
    WHERE status = 'paid'
    GROUP BY MONTH(paid_at)
    ORDER BY MONTH(paid_at)
  `;

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "gagal mengambil data chart",
        error: err.message,
      });
    }

    res.json(result);
  });
};
