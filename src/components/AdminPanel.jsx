import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { 
  Settings, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Save,
  AlertCircle,
  CheckCircle,
  ArrowLeft
} from 'lucide-react'

const AdminPanel = ({ monthlyProfit, accumulatedProfit, onUpdateProfits }) => {
  const [newMonthlyProfit, setNewMonthlyProfit] = useState(monthlyProfit.toString())
  const [newAccumulatedProfit, setNewAccumulatedProfit] = useState(accumulatedProfit.toString())
  const [isSaving, setIsSaving] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    
    // Simular salvamento
    setTimeout(() => {
      const monthly = parseFloat(newMonthlyProfit) || 0
      const accumulated = parseFloat(newAccumulatedProfit) || 0
      
      onUpdateProfits(monthly, accumulated)
      setIsSaving(false)
      setSaveSuccess(true)
      
      setTimeout(() => setSaveSuccess(false), 3000)
    }, 1000)
  }

  const handleReset = () => {
    setNewMonthlyProfit(monthlyProfit.toString())
    setNewAccumulatedProfit(accumulatedProfit.toString())
  }

  // Dados simulados para estatísticas
  const stats = {
    totalUsers: 1247,
    activeUsers: 892,
    totalInvested: 15420000,
    monthlyVolume: 2340000
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                className="mr-4"
                onClick={() => window.close()}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
              <div className="flex items-center">
                <Settings className="h-6 w-6 text-blue-600 mr-2" />
                <h1 className="text-2xl font-bold text-gray-900">Painel Administrativo</h1>
              </div>
            </div>
            <Badge variant="secondary" className="bg-red-100 text-red-800">
              Admin
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Estatísticas Gerais */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Usuários</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                +12% em relação ao mês passado
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Usuários Ativos</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeUsers.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                {((stats.activeUsers / stats.totalUsers) * 100).toFixed(1)}% do total
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Investido</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                R$ {(stats.totalInvested / 1000000).toFixed(1)}M
              </div>
              <p className="text-xs text-muted-foreground">
                Volume total na plataforma
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Volume Mensal</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                R$ {(stats.monthlyVolume / 1000000).toFixed(1)}M
              </div>
              <p className="text-xs text-muted-foreground">
                Movimentação do mês atual
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Configuração de Lucros */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                Configuração de Lucros
              </CardTitle>
              <CardDescription>
                Defina os percentuais de lucro que serão exibidos para todos os usuários
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="monthly">Lucro Mensal (%)</Label>
                <Input
                  id="monthly"
                  type="number"
                  step="0.1"
                  value={newMonthlyProfit}
                  onChange={(e) => setNewMonthlyProfit(e.target.value)}
                  placeholder="Ex: 5.2"
                  className="text-lg"
                />
                <p className="text-sm text-gray-500">
                  Percentual de lucro do mês atual
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="accumulated">Lucro Acumulado (%)</Label>
                <Input
                  id="accumulated"
                  type="number"
                  step="0.1"
                  value={newAccumulatedProfit}
                  onChange={(e) => setNewAccumulatedProfit(e.target.value)}
                  placeholder="Ex: 15.8"
                  className="text-lg"
                />
                <p className="text-sm text-gray-500">
                  Percentual de lucro total acumulado
                </p>
              </div>

              <div className="flex gap-3 pt-4">
                <Button 
                  onClick={handleSave}
                  disabled={isSaving}
                  className="flex-1"
                >
                  {isSaving ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Salvando...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Save className="w-4 h-4" />
                      Salvar Alterações
                    </div>
                  )}
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={handleReset}
                  disabled={isSaving}
                >
                  Resetar
                </Button>
              </div>

              {saveSuccess && (
                <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-800 text-sm">
                    Lucros atualizados com sucesso!
                  </span>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-amber-600" />
                Valores Atuais
              </CardTitle>
              <CardDescription>
                Valores que estão sendo exibidos para os usuários
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-blue-900">Lucro Mensal</p>
                    <p className="text-xs text-blue-600">Exibido no dashboard</p>
                  </div>
                  <div className="text-2xl font-bold text-blue-700">
                    {monthlyProfit}%
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-purple-900">Lucro Acumulado</p>
                    <p className="text-xs text-purple-600">Exibido no dashboard</p>
                  </div>
                  <div className="text-2xl font-bold text-purple-700">
                    {accumulatedProfit}%
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Instruções:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Os valores são atualizados em tempo real</li>
                  <li>• Todos os usuários verão os novos percentuais</li>
                  <li>• Use valores realistas para manter a credibilidade</li>
                  <li>• Recomenda-se atualizar mensalmente</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ações Administrativas */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Ações Administrativas</CardTitle>
            <CardDescription>
              Ferramentas e configurações avançadas da plataforma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <Users className="h-6 w-6" />
                <span className="text-sm">Gerenciar Usuários</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <DollarSign className="h-6 w-6" />
                <span className="text-sm">Relatórios Financeiros</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <Settings className="h-6 w-6" />
                <span className="text-sm">Configurações</span>
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Estas funcionalidades estão em desenvolvimento e serão disponibilizadas em breve.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AdminPanel

