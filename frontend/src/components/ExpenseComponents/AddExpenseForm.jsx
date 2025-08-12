import React, { useState } from 'react'
import Input from "../Inputs/Input";
import EmojiPickerPopup from "../EmojiPickerPopup";

const AddExpenseForm = ({ onAddExpense }) => {
    const [income, setIncome] = useState({
        category: "",
        amount: "",
        date: "",
        icon: ""
    });

    const handleChange = (key, value) => setIncome({ ...income, [key]: value });
    
    return (
        <div>
            <EmojiPickerPopup 
                icon={income.icon}
                onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
            />

            <Input 
                value={income.category}
                onChange={({ target }) => handleChange("category", target.value)}
                label="Category"
                placeholder="Expense category"
                type="text"
            />

            <Input 
                value={income.amount}
                onChange={({ target }) => handleChange("amount", target.value)}
                label="Amount"
                placeholder="Expense amount"
                type="number"
            />

            <Input 
                value={income.date}
                onChange={({ target }) => handleChange("date", target.value)}
                label="Date"
                placeholder=""
                type="date"
            />

            <div className="flex justify-end mt-4">
                <button 
                    type='button'
                    className='bg-blue-500 text-white px-4 py-2 rounded'
                    onClick={() => onAddExpense(income)}
                >
                    Add Expense
                </button>
            </div>
        </div>
    )
}

export default AddExpenseForm