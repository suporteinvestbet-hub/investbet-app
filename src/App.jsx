import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import ContractPage from './components/ContractPage'
import Dashboard from './components/Dashboard'
import AdminPanel from './components/AdminPanel'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  const [contractAccepted, setContractAccepted] = useState(false)
  const [monthlyProfit, setMonthlyProfit] = useState(5.2)
  const [accumulatedProfit, setAccumulatedProfit] = useState(15.8)

  useEffect(() => {
    // Verificar se há dados salvos no localStorage
    const savedUser = localStorage.getItem('investapp_user')
    const savedContract = localStorage.getItem('investapp_contract')
    const savedMonthlyProfit = localStorage.getItem('investapp_monthly_profit')
    const savedAccumulatedProfit = localStorage.getItem('investapp_accumulated_profit')
    
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    if (savedContract) {
      setContractAccepted(JSON.parse(savedContract))
    }
    if (savedMonthlyProfit) {
      setMonthlyProfit(parseFloat(savedMonthlyProfit))
    }
    if (savedAccumulatedProfit) {
      setAccumulatedProfit(parseFloat(savedAccumulatedProfit))
    }
  }, [])

  const handleLogin = (userData) => {
    setUser(userData)
    localStorage.setItem('investapp_user', JSON.stringify(userData))
  }

  const handleContractAccept = () => {
    setContractAccepted(true)
    localStorage.setItem('investapp_contract', JSON.stringify(true))
  }

  const handleLogout = () => {
    setUser(null)
    setContractAccepted(false)
    localStorage.removeItem('investapp_user')
    localStorage.removeItem('investapp_contract')
  }

  const updateProfits = (monthly, accumulated) => {
    setMonthlyProfit(monthly)
    setAccumulatedProfit(accumulated)
    localStorage.setItem('investapp_monthly_profit', monthly.toString())
    localStorage.setItem('investapp_accumulated_profit', accumulated.toString())
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route 
            path="/login" 
            element={
              !user ? (
                <LoginPage onLogin={handleLogin} />
              ) : (
                <Navigate to={contractAccepted ? "/dashboard" : "/contract"} replace />
              )
            } 
          />
          <Route 
            path="/contract" 
            element={
              user && !contractAccepted ? (
                <ContractPage onAccept={handleContractAccept} />
              ) : (
                <Navigate to={user ? "/dashboard" : "/login"} replace />
              )
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              user && contractAccepted ? (
                <Dashboard 
                  user={user} 
                  onLogout={handleLogout}
                  monthlyProfit={monthlyProfit}
                  accumulatedProfit={accumulatedProfit}
                />
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          <Route 
            path="/admin" 
            element={
              user && user.isAdmin ? (
                <AdminPanel 
                  monthlyProfit={monthlyProfit}
                  accumulatedProfit={accumulatedProfit}
                  onUpdateProfits={updateProfits}
                />
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

