const express = require("express");
const {
    addExpense,
    getAllExpense,
    deleteExpense,
    downloadExpenseExcell
} = require("../controllers/expenseController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/add", protect, getAllExpense);
router.get("/get", protect, getAllIncome);
router.get("/downloadexcel", protect, downloadExpenseExcell);
router.delete("/:id", protect, deleteExpense);

module.exports = router;