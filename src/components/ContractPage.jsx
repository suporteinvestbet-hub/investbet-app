import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { ScrollArea } from '@/components/ui/scroll-area'
import { FileText, AlertTriangle, CheckCircle } from 'lucide-react'

const ContractPage = ({ onAccept }) => {
  const [agreed, setAgreed] = useState(false)
  const [isAccepting, setIsAccepting] = useState(false)

  const handleAccept = () => {
    if (!agreed) return
    
    setIsAccepting(true)
    setTimeout(() => {
      onAccept()
      setIsAccepting(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4 shadow-lg">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Termos de Uso</h1>
          <p className="text-slate-300">Leia e aceite os termos para continuar</p>
        </div>

        <Card className="shadow-2xl border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              Contrato de Investimento
            </CardTitle>
            <CardDescription>
              Por favor, leia atentamente todos os termos antes de prosseguir
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-96 w-full border rounded-lg p-4 mb-6">
              <div className="space-y-4 text-sm">
                <section>
                  <h3 className="font-semibold text-lg mb-2">1. DEFINIÇÕES</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Este contrato estabelece os termos e condições para utilização da plataforma InvestApp, 
                    uma aplicação de investimentos que oferece oportunidades de crescimento financeiro através 
                    de estratégias diversificadas de investimento.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">2. RISCOS DE INVESTIMENTO</h3>
                  <p className="text-gray-600 leading-relaxed">
                    O investidor está ciente de que todo investimento envolve riscos, incluindo a possibilidade 
                    de perda parcial ou total do capital investido. Os rendimentos passados não garantem 
                    resultados futuros. A rentabilidade apresentada é meramente ilustrativa e pode variar 
                    conforme as condições de mercado.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">3. RESPONSABILIDADES DO INVESTIDOR</h3>
                  <p className="text-gray-600 leading-relaxed">
                    O investidor declara ter conhecimento adequado sobre investimentos e assume total 
                    responsabilidade pelas decisões tomadas. É responsabilidade do investidor manter 
                    suas informações atualizadas e seguir as orientações de segurança da plataforma.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">4. POLÍTICA DE PRIVACIDADE</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Todas as informações fornecidas serão tratadas com confidencialidade e utilizadas 
                    exclusivamente para os fins relacionados aos serviços de investimento. Os dados 
                    pessoais serão protegidos conforme a Lei Geral de Proteção de Dados (LGPD).
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">5. TAXAS E CUSTOS</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A plataforma pode cobrar taxas de administração e performance conforme especificado 
                    em cada produto de investimento. Todas as taxas serão claramente informadas antes 
                    da confirmação do investimento.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">6. RESCISÃO</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Este contrato pode ser rescindido a qualquer momento por qualquer das partes, 
                    mediante comunicação prévia. Em caso de rescisão, os investimentos em andamento 
                    seguirão os termos específicos de cada produto até seu vencimento.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">7. FORO</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Fica eleito o foro da comarca de São Paulo/SP para dirimir quaisquer controvérsias 
                    decorrentes deste contrato, renunciando as partes a qualquer outro, por mais 
                    privilegiado que seja.
                  </p>
                </section>

                <div className="border-t pt-4 mt-6">
                  <p className="text-xs text-gray-500">
                    Última atualização: Janeiro de 2025<br />
                    InvestApp - Plataforma de Investimentos Ltda.<br />
                    CNPJ: 00.000.000/0001-00
                  </p>
                </div>
              </div>
            </ScrollArea>

            <div className="flex items-center space-x-2 mb-6">
              <Checkbox 
                id="agree" 
                checked={agreed}
                onCheckedChange={setAgreed}
              />
              <label 
                htmlFor="agree" 
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Li e concordo com todos os termos e condições acima
              </label>
            </div>

            <Button 
              onClick={handleAccept}
              disabled={!agreed || isAccepting}
              className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-semibold disabled:opacity-50"
            >
              {isAccepting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Processando...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Aceitar e Continuar
                </div>
              )}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ContractPage

