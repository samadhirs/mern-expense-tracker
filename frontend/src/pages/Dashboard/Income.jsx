import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import IncomeOverview from '../../components/IncomeComponents/IncomeOverview';
import { API_PATHS } from '../../utils/apiPaths';
import axiosInstance from '../../utils/axiosInstance';
import Modal from '../../components/Modal';
import AddIncomeForm from '../../components/IncomeComponents/AddIncomeForm';

const Income = () => {
  const [incomeData, setIncomeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDeleteAlart, setOpenDeleteAlert] = useState({
    show: false,
    data: null
  });
  const [openAddIncomeModal, setOpenAddIncomeModal] = useState(false);

  // Get income data
  const fetchIncomeDetails = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const response = await axiosInstance.get(
        `${API_PATHS.INCOME.GET_ALL_INCOME}`
      );
      
      if (response.data) {
        setIncomeData(response.data);
      }
    } 
    catch (error) {
      console.log('Error fetching income data:', error);
    } 
    finally {
      setLoading(false);
    }
  };

  // Add income handler
  const handleAddIncome = async (income) => {};

  // Delete income
  const deleteIncome = async (id) => {};

  // handle download income details
  const handleDownloadIncomeDetails = async () => {};

  useEffect(() => {
    fetchIncomeDetails();

    return () => {};
  }, []);

  return (
    <DashboardLayout activeMenu="Income">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
            <IncomeOverview 
              transactions={incomeData}
              onAddIncome={() => setOpenAddIncomeModal(true)}
            />
          </div>
        </div>

        <Modal
          isOpen={openAddIncomeModal}
          onClose={() => setOpenAddIncomeModal(false)}
          title="Add Income"
        >
          <AddIncomeForm
            onAddIncome={handleAddIncome}
          />
        </Modal>
      </div>
    </DashboardLayout>
  )
}

export default Income;