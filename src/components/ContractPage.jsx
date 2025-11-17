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
          <h1 className="text-3xl font-bold text-white mb-2">Contrato de Prestação de Serviços</h1>
          <p className="text-slate-300">Leia e aceite os termos para continuar</p>
        </div>

        <Card className="shadow-2xl border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              InvestBet Capital – Execução de Operações em Apostas Esportivas
            </CardTitle>
            <CardDescription>
              Por favor, leia atentamente todos os termos antes de prosseguir
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-96 w-full border rounded-lg p-4 mb-6">
              <div className="space-y-4 text-sm">
                <section>
                  <h3 className="font-semibold text-lg mb-2">1. PARTES CONTRATANTES</h3>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    <strong>CONTRATADA:</strong> InvestBet Capital, empresa atuante exclusivamente no segmento de apostas esportivas por meio de traders profissionais, não prestando serviços financeiros, de investimento ou quaisquer atividades reguladas pela CVM ou Banco Central.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>CONTRATANTE:</strong> Usuário que aceita integralmente os termos deste contrato.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">2. OBJETO DO CONTRATO</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Este instrumento tem por objeto a prestação de serviços de execução de operações em apostas esportivas, com caráter de entretenimento, mediante utilização dos valores enviados pelo CONTRATANTE exclusivamente para essa finalidade.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">3. POLÍTICA DE SEGURANÇA E DEVOLUÇÃO PROPORCIONAL DO CAPITAL</h3>
                  <p className="text-gray-600 leading-relaxed italic mb-2">
                    📌 Cláusula antecipada estrategicamente para gerar máxima confiança ao cliente.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    3.1. Embora a CONTRATADA não garanta lucros, a empresa adota internamente uma Política de Segurança de Capital, destinada a proteger o CONTRATANTE em cenários extremos e altamente improváveis.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    3.2. Os rendimentos mensais eventualmente recebidos pelo CONTRATANTE serão considerados como amortização natural do capital inicial.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    <strong>Exemplo:</strong><br />
                    Se o CONTRATANTE aportar R$ 10.000,00, e ao longo de alguns meses receber R$ 5.000,00 em rendimentos, entende-se que 50% do capital inicial já foi retornado.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    3.3. Caso ocorra qualquer evento excepcional que impossibilite a continuidade das operações — como falha grave, problema operacional ou encerramento imprevisto — a CONTRATADA se compromete a devolver ao CONTRATANTE o valor proporcional do capital ainda não amortizado.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    <strong>Seguindo o exemplo anterior:</strong><br />
                    O CONTRATANTE receberia R$ 5.000,00 restantes.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    3.4. Essa política garante que, mesmo no pior cenário, o CONTRATANTE não sairá no prejuízo total, preservando seu capital proporcionalmente.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    3.5. A CONTRATADA reforça que o objetivo central é operar com segurança, responsabilidade e eficiência, buscando evitar qualquer situação de risco que demande ativação desta política.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">4. NATUREZA JURÍDICA E ISENÇÃO REGULATÓRIA</h3>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    A CONTRATADA:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 leading-relaxed ml-4">
                    <li>não presta consultoria financeira;</li>
                    <li>não administra investimentos;</li>
                    <li>não garante rentabilidade;</li>
                    <li>não realiza atividades sujeitas à CVM ou Banco Central.</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed mt-2">
                    As operações têm natureza exclusivamente recreativa no âmbito das apostas esportivas.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">5. SERVIÇOS PRESTADOS</h3>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    A CONTRATADA executará:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 leading-relaxed ml-4">
                    <li>análises estatísticas de eventos esportivos;</li>
                    <li>definição e aplicação de estratégias de apostas;</li>
                    <li>execução das operações com os valores enviados pelo CONTRATANTE;</li>
                    <li>fornecimento de informações gerais de desempenho quando aplicável.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">6. RISCOS E AUSÊNCIA DE GARANTIA</h3>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    6.1. A participação em apostas esportivas envolve riscos significativos.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    6.2. Resultados passados não asseguram resultados futuros.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    6.3. O CONTRATANTE declara ciência plena dos riscos e participa por sua livre escolha.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">7. OBRIGAÇÕES DO CONTRATANTE</h3>
                  <ul className="list-disc list-inside text-gray-600 leading-relaxed ml-4">
                    <li>Fornecer informação verdadeira;</li>
                    <li>Avaliar sua capacidade financeira antes de enviar valores;</li>
                    <li>Reconhecer os riscos envolvidos;</li>
                    <li>Cumprir as disposições deste contrato.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">8. OBRIGAÇÕES DA CONTRATADA</h3>
                  <ul className="list-disc list-inside text-gray-600 leading-relaxed ml-4">
                    <li>Empregar melhores esforços profissionais;</li>
                    <li>Utilizar os valores exclusivamente para apostas esportivas;</li>
                    <li>Proteger os dados do CONTRATANTE;</li>
                    <li>Cumprir integralmente a Política de Segurança e Devolução (Cláusula 3).</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">9. POLÍTICA DE VALORES, SALDO E SAQUES</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Os procedimentos de saques seguirão as normas internas da CONTRATADA, respeitando prazos operacionais e eventuais ajustes necessários. Custos e taxas serão informados previamente.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">10. PRIVACIDADE – LGPD</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A CONTRATADA garante proteção total dos dados pessoais conforme a Lei Geral de Proteção de Dados (LGPD).
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">11. VIGÊNCIA E RESCISÃO</h3>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    Contrato entra em vigor na aceitação pelo CONTRATANTE.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    Qualquer parte pode rescindir com 30 dias de aviso prévio.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Na rescisão, aplica-se a Cláusula 3 para devolução proporcional do capital.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">12. ALTERAÇÕES DOS TERMOS</h3>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    A CONTRATADA pode atualizar este contrato mediante aviso.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    A continuidade do uso implica aceitação automática.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">13. FORO</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Fica eleito o foro da comarca da sede da CONTRATADA para quaisquer disputas.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">14. DISPOSIÇÕES GERAIS</h3>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    O contrato substitui versões anteriores.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Cláusulas inválidas não prejudicam o restante.
                  </p>
                </section>

                <div className="border-t pt-4 mt-6">
                  <h3 className="font-semibold text-lg mb-2 text-red-500">AVISO LEGAL FINAL</h3>
                  <p className="text-xs text-gray-500">
                    A InvestBet Capital não garante lucros, não presta serviços financeiros, não está sob regulamentação da CVM ou Banco Central. A participação envolve riscos.
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
