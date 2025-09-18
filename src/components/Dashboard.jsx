import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  LayoutDashboard, 
  CreditCard, 
  TrendingUp, 
  Repeat, 
  Banknote,
  User,
  LogOut,
  Menu,
  X,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  PieChart,
  Settings
} from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'

const Dashboard = ({ user, onLogout, monthlyProfit, accumulatedProfit }) => {
  const [activeSection, setActiveSection] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Dados simulados para gráficos
  const monthlyData = [
    { month: 'Jan', value: 2.1 },
    { month: 'Fev', value: 3.2 },
    { month: 'Mar', value: 4.1 },
    { month: 'Abr', value: 3.8 },
    { month: 'Mai', value: 5.2 },
    { month: 'Jun', value: monthlyProfit }
  ]

  const balanceHistory = [
    { month: 'Jan', balance: 20000 },
    { month: 'Fev', balance: 20420 },
    { month: 'Mar', balance: 21084 },
    { month: 'Abr', value: 21885 },
    { month: 'Mai', balance: 22716 },
    { month: 'Jun', balance: user.balance }
  ]

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, section: 'BACKOFFICE' },
    { id: 'depositos', label: 'Depósitos', icon: CreditCard, section: 'CARTEIRA' },
    { id: 'negociacoes', label: 'Negociações', icon: TrendingUp, section: 'CARTEIRA' },
    { id: 'reaplicacao', label: 'Reaplicação', icon: Repeat, section: 'CARTEIRA' },
    { id: 'saques', label: 'Saques', icon: Banknote, section: 'CARTEIRA' }
  ]

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            {/* Cards de Métricas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Saldo Total</CardTitle>
                  <DollarSign className="h-4 w-4" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    R$ {user.balance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </div>
                  <p className="text-xs text-blue-100 mt-1">
                    Disponível para investimento
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Lucro Mensal</CardTitle>
                  <ArrowUpRight className="h-4 w-4" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{monthlyProfit}%</div>
                  <p className="text-xs text-green-100 mt-1">
                    Rendimento do mês atual
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Lucro Acumulado</CardTitle>
                  <TrendingUp className="h-4 w-4" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{accumulatedProfit}%</div>
                  <p className="text-xs text-purple-100 mt-1">
                    Rendimento total acumulado
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Gráficos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Evolução do Saldo</CardTitle>
                  <CardDescription>Histórico dos últimos 6 meses</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={balanceHistory}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip 
                        formatter={(value) => [`R$ ${value.toLocaleString('pt-BR')}`, 'Saldo']}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="balance" 
                        stroke="#3b82f6" 
                        fill="#3b82f6" 
                        fillOpacity={0.1}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Rentabilidade Mensal</CardTitle>
                  <CardDescription>Performance dos últimos 6 meses</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip 
                        formatter={(value) => [`${value}%`, 'Rentabilidade']}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#10b981" 
                        strokeWidth={3}
                        dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Ações Rápidas */}
            <Card>
              <CardHeader>
                <CardTitle>Ações Rápidas</CardTitle>
                <CardDescription>Operações mais utilizadas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button 
                    variant="outline" 
                    className="h-20 flex flex-col gap-2"
                    onClick={() => setActiveSection('depositos')}
                  >
                    <CreditCard className="h-6 w-6" />
                    <span className="text-sm">Depositar</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex flex-col gap-2"
                    onClick={() => setActiveSection('saques')}
                  >
                    <Banknote className="h-6 w-6" />
                    <span className="text-sm">Sacar</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex flex-col gap-2"
                    onClick={() => setActiveSection('negociacoes')}
                  >
                    <TrendingUp className="h-6 w-6" />
                    <span className="text-sm">Negociar</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex flex-col gap-2"
                    onClick={() => setActiveSection('reaplicacao')}
                  >
                    <Repeat className="h-6 w-6" />
                    <span className="text-sm">Reaplicar</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )
      default:
        return (
          <Card>
            <CardHeader>
              <CardTitle>{menuItems.find(item => item.id === activeSection)?.label}</CardTitle>
              <CardDescription>Esta seção está em desenvolvimento</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                A funcionalidade "{menuItems.find(item => item.id === activeSection)?.label}" 
                será implementada em breve.
              </p>
            </CardContent>
          </Card>
        )
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-800">
          <h1 className="text-xl font-bold">InvestApp</h1>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white hover:bg-gray-800"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <nav className="mt-8">
          {/* BACKOFFICE Section */}
          <div className="px-4 mb-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              BACKOFFICE
            </p>
          </div>
          
          <div className="space-y-1 px-2">
            {menuItems.filter(item => item.section === 'BACKOFFICE').map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id)
                    setSidebarOpen(false)
                  }}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.label}
                </button>
              )
            })}
          </div>

          {/* CARTEIRA Section */}
          <div className="px-4 mb-4 mt-8">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              CARTEIRA
            </p>
          </div>
          
          <div className="space-y-1 px-2">
            {menuItems.filter(item => item.section === 'CARTEIRA').map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id)
                    setSidebarOpen(false)
                  }}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.label}
                </button>
              )
            })}
          </div>
        </nav>

        {/* User Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-gray-400">{user.email}</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            {user.isAdmin && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 text-white border-gray-600 hover:bg-gray-800"
                onClick={() => window.location.href = '/admin'}
              >
                <Settings className="w-4 h-4 mr-1" />
                Admin
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              className="flex-1 text-white border-gray-600 hover:bg-gray-800"
              onClick={onLogout}
            >
              <LogOut className="w-4 h-4 mr-1" />
              Sair
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-4">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden mr-2"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-4 w-4" />
              </Button>
              <h2 className="text-xl font-semibold text-gray-800">
                {menuItems.find(item => item.id === activeSection)?.label || 'Dashboard'}
              </h2>
            </div>
            
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Online
              </Badge>
              <div className="text-sm text-gray-600">
                Última atualização: {new Date().toLocaleTimeString('pt-BR')}
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          {renderContent()}
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}

export default Dashboard

