# InvestApp - Plataforma de Investimentos

## Descrição

O InvestApp é uma plataforma web responsiva para investimentos que simula um aplicativo móvel. A aplicação oferece um sistema completo de autenticação, dashboard financeiro, e painel administrativo para gerenciar lucros mensais.

## Funcionalidades Implementadas

### ✅ Sistema de Autenticação
- **Tela de Login**: Interface moderna com validação de credenciais
- **Contas de Teste**:
  - Usuário comum: `usuario@teste.com`
  - Administrador: `admin@investapp.com`
  - Senha: qualquer senha

### ✅ Contrato de Investimento
- **Aceite de Termos**: Tela obrigatória com contrato completo
- **Scroll Area**: Visualização completa dos termos e condições
- **Checkbox de Confirmação**: Validação obrigatória antes de prosseguir

### ✅ Dashboard Principal
- **Métricas Financeiras**:
  - Saldo Total: R$ 25.000,00
  - Lucro Mensal: 5.2% (configurável pelo admin)
  - Lucro Acumulado: 15.8% (configurável pelo admin)

- **Gráficos Interativos**:
  - Evolução do Saldo (últimos 6 meses)
  - Rentabilidade Mensal (performance histórica)

- **Menu Lateral Responsivo**:
  - **BACKOFFICE**: Dashboard
  - **CARTEIRA**: Depósitos, Negociações, Reaplicação, Saques

- **Ações Rápidas**: Botões para operações principais

### ✅ Painel Administrativo
- **Configuração de Lucros**: Interface para definir percentuais mensais e acumulados
- **Estatísticas da Plataforma**: Métricas de usuários e volume de investimentos
- **Persistência de Dados**: Valores salvos no localStorage
- **Feedback Visual**: Confirmações de sucesso nas operações

### ✅ Design Responsivo
- **Mobile-First**: Interface otimizada para dispositivos móveis
- **Menu Lateral Colapsível**: Navegação adaptativa
- **Cards Informativos**: Layout moderno com gradientes
- **Tema Escuro**: Sidebar com design profissional

## Tecnologias Utilizadas

- **React 18**: Framework principal
- **Vite**: Build tool e dev server
- **Tailwind CSS**: Estilização responsiva
- **Shadcn/UI**: Componentes de interface
- **Lucide Icons**: Ícones modernos
- **Recharts**: Gráficos interativos
- **React Router**: Navegação entre páginas

## Estrutura do Projeto

```
src/
├── components/
│   ├── ui/              # Componentes shadcn/ui
│   ├── LoginPage.jsx    # Tela de login
│   ├── ContractPage.jsx # Tela de contrato
│   ├── Dashboard.jsx    # Dashboard principal
│   └── AdminPanel.jsx   # Painel administrativo
├── assets/              # Imagens e recursos
├── App.jsx              # Componente principal com roteamento
└── main.jsx             # Ponto de entrada
```

## Como Executar

1. **Instalar dependências**:
   ```bash
   cd investment-app
   npm install
   ```

2. **Iniciar servidor de desenvolvimento**:
   ```bash
   npm run dev -- --host
   ```

3. **Acessar aplicação**:
   - URL: http://localhost:5173
   - Login: usuario@teste.com ou admin@investapp.com
   - Senha: qualquer senha

## Fluxo de Uso

### Para Usuários Comuns:
1. Fazer login com credenciais de teste
2. Aceitar o contrato de investimento
3. Visualizar dashboard com métricas financeiras
4. Navegar pelas seções do menu lateral
5. Usar ações rápidas para operações

### Para Administradores:
1. Fazer login com admin@investapp.com
2. Aceitar o contrato de investimento
3. Acessar dashboard administrativo
4. Configurar lucros mensais e acumulados
5. Visualizar estatísticas da plataforma

## Recursos Implementados

### Interface de Usuário
- ✅ Design moderno e responsivo
- ✅ Animações e transições suaves
- ✅ Feedback visual para ações
- ✅ Tema consistente com cores profissionais

### Funcionalidades de Negócio
- ✅ Sistema de autenticação simulado
- ✅ Persistência de dados no localStorage
- ✅ Configuração dinâmica de lucros
- ✅ Visualização de métricas financeiras
- ✅ Gráficos de performance histórica

### Experiência do Usuário
- ✅ Fluxo intuitivo de navegação
- ✅ Validações de formulário
- ✅ Estados de loading
- ✅ Mensagens de confirmação
- ✅ Interface mobile-friendly

## Próximos Passos (Melhorias Futuras)

1. **Backend Integration**: Conectar com API real
2. **Autenticação Real**: Implementar JWT e segurança
3. **Funcionalidades das Seções**: Desenvolver Depósitos, Saques, etc.
4. **Histórico de Transações**: Implementar listagem detalhada
5. **Notificações**: Sistema de alertas e notificações
6. **Relatórios**: Geração de PDFs e relatórios detalhados

## Observações Técnicas

- O aplicativo utiliza dados simulados para demonstração
- Os lucros são configuráveis pelo administrador
- A persistência é feita via localStorage (desenvolvimento)
- Interface otimizada para experiência mobile
- Código modular e bem estruturado para manutenção

---

**Desenvolvido com React + Vite + Tailwind CSS**

