# InvestApp - Instruções de Uso

## 🚀 Como Iniciar o Aplicativo

1. **Abra o terminal** na pasta do projeto
2. **Execute o comando**:
   ```bash
   npm run dev -- --host
   ```
3. **Acesse no navegador**: http://localhost:5173

## 👤 Contas de Teste

### Usuário Comum
- **Email**: usuario@teste.com
- **Senha**: qualquer senha
- **Funcionalidades**: Visualizar dashboard, métricas financeiras, navegar pelas seções

### Administrador
- **Email**: admin@investapp.com  
- **Senha**: qualquer senha
- **Funcionalidades**: Todas do usuário comum + painel administrativo

## 📱 Como Usar o Aplicativo

### 1. Login
- Digite o email de teste
- Digite qualquer senha
- Clique em "Entrar"

### 2. Aceite do Contrato
- Leia os termos de investimento
- Marque o checkbox "Li e concordo..."
- Clique em "Aceitar e Continuar"

### 3. Dashboard Principal
- **Visualize suas métricas**:
  - Saldo Total: R$ 25.000,00
  - Lucro Mensal: 5.2%
  - Lucro Acumulado: 15.8%

- **Analise os gráficos**:
  - Evolução do Saldo (6 meses)
  - Rentabilidade Mensal

- **Use as ações rápidas**:
  - Depositar, Sacar, Negociar, Reaplicar

### 4. Menu Lateral
- **BACKOFFICE**:
  - Dashboard (principal)

- **CARTEIRA**:
  - Depósitos
  - Negociações  
  - Reaplicação
  - Saques

### 5. Painel Administrativo (Apenas Admin)
⚠️ **Importante**: O painel administrativo permite configurar os lucros que todos os usuários verão!

- **Acesso**: Faça login como admin@investapp.com
- **Configurações**:
  - Defina o Lucro Mensal (%)
  - Defina o Lucro Acumulado (%)
  - Clique em "Salvar Alterações"

- **Visualize estatísticas**:
  - Total de usuários: 1.247
  - Usuários ativos: 892
  - Volume total: R$ 15.4M
  - Volume mensal: R$ 2.3M

## 🎯 Funcionalidades Principais

### ✅ Implementadas
- [x] Sistema de login com validação
- [x] Tela de aceite de contrato obrigatório
- [x] Dashboard com métricas financeiras
- [x] Gráficos interativos de performance
- [x] Menu lateral responsivo (baseado na imagem fornecida)
- [x] Painel administrativo para configurar lucros
- [x] Persistência de dados no navegador
- [x] Design responsivo para mobile
- [x] Navegação entre seções

### 🔄 Em Desenvolvimento
- [ ] Funcionalidades específicas de Depósitos
- [ ] Funcionalidades específicas de Saques
- [ ] Funcionalidades específicas de Negociações
- [ ] Funcionalidades específicas de Reaplicação
- [ ] Histórico detalhado de transações
- [ ] Sistema de notificações

## 📊 Dados do Sistema

### Métricas Padrão
- **Saldo**: R$ 25.000,00 (fixo para demonstração)
- **Lucro Mensal**: 5.2% (configurável pelo admin)
- **Lucro Acumulado**: 15.8% (configurável pelo admin)

### Histórico Simulado
- **Janeiro**: 2.1% de rentabilidade
- **Fevereiro**: 3.2% de rentabilidade  
- **Março**: 4.1% de rentabilidade
- **Abril**: 3.8% de rentabilidade
- **Maio**: 5.2% de rentabilidade
- **Junho**: Valor atual configurado

## 🔧 Configurações Administrativas

### Como Alterar os Lucros
1. Faça login como administrador
2. Aceite o contrato
3. Acesse o painel administrativo
4. Altere os valores de lucro mensal e acumulado
5. Clique em "Salvar Alterações"
6. **Os novos valores serão exibidos para todos os usuários!**

### Persistência
- Os valores são salvos no localStorage do navegador
- Permanecem mesmo após fechar e reabrir o aplicativo
- Para resetar, limpe o localStorage do navegador

## 📱 Design Responsivo

### Mobile
- Menu lateral colapsível
- Cards adaptáveis
- Gráficos responsivos
- Botões touch-friendly

### Desktop
- Menu lateral fixo
- Layout em grid
- Gráficos lado a lado
- Hover effects

## 🎨 Características Visuais

### Cores
- **Azul**: Saldo total e elementos principais
- **Verde**: Lucros e crescimento
- **Roxo**: Métricas acumuladas
- **Cinza Escuro**: Menu lateral e navegação

### Ícones
- Lucide React (modernos e consistentes)
- Ícones específicos para cada funcionalidade
- Indicadores visuais claros

## 🔒 Segurança (Demonstração)

- Sistema de autenticação simulado
- Validação de usuário administrador
- Rotas protegidas por autenticação
- Persistência local segura

---

**Desenvolvido para demonstrar um aplicativo completo de investimentos com painel administrativo**

