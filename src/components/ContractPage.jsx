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
          <h1 className="text-3xl font-bold text-white mb-2">Termos de Serviço</h1>
          <p className="text-slate-300">Leia e aceite os termos para continuar</p>
        </div>

        <Card className="shadow-2xl border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              Contrato de Prestação de Serviços
            </CardTitle>
            <CardDescription>
              Por favor, leia atentamente todos os termos antes de prosseguir
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-96 w-full border rounded-lg p-4 mb-6">
              <div className="space-y-4 text-sm">
                
                <section>
                  <h3 className="font-semibold text-lg mb-2">CONTRATO DE PRESTAÇÃO DE SERVIÇOS</h3>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>InvestBet Capital – Execução de Operações em Apostas Esportivas</strong>
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">1. PARTES CONTRATANTES</h3>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>CONTRATADA:</strong> InvestBet Capital, empresa atuante exclusivamente no segmento de apostas esportivas, por meio de traders profissionais, sem prestação de serviços financeiros, aconselhamento de investimentos ou qualquer atividade sujeita à regulação da CVM ou do Banco Central do Brasil.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>CONTRATANTE:</strong> Usuário que aceita integralmente os termos e condições deste contrato.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">2. OBJETO DO CONTRATO</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Este contrato tem por objeto a prestação de serviços de execução de operações em apostas esportivas, com caráter de entretenimento, mediante utilização dos valores transferidos pelo CONTRATANTE exclusivamente para essa finalidade.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">3. NATUREZA JURÍDICA – ISENÇÃO REGULATÓRIA</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A CONTRATADA:
                    <ul>
                      <li>não presta consultoria financeira, gestão de investimentos, administração de carteiras ou captação pública;</li>
                      <li>não garante rentabilidade;</li>
                      <li>atua exclusivamente com apostas esportivas, classificadas legalmente como entretenimento.</li>
                    </ul>
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">4. GARANTIA DE DEVOLUÇÃO PROPORCIONAL DO CAPITAL (SEGURANÇA INVESTBET)</h3>
                  <p className="text-gray-600 leading-relaxed italic">
                    Cláusula criada especificamente para gerar confiança e segurança ao cliente.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>4.1.</strong> Embora a CONTRATADA não garanta lucros, adota internamente uma Política de Segurança de Capital, com objetivo de proteger o CONTRATANTE em cenários adversos.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>4.2.</strong> Caso o CONTRATANTE realize um aporte e, durante os meses seguintes, receba rendimentos mensais correspondentes a parte do valor aportado, esses valores serão considerados amortizações naturais do capital.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    <em>Exemplo didático:</em> Se o CONTRATANTE aportar R$ 10.000,00 e receber rendimentos mensais que totalizem R$ 5.000,00 ao longo de 5 meses, significa que 50% do capital já foi retornado ao CONTRATANTE.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>4.3.</strong> Em cenário extremo e improvável de encerramento imprevisto das operações, falha operacional grave ou impossibilidade de continuidade do serviço, a CONTRATADA se compromete a devolver ao CONTRATANTE o valor proporcional restante do capital ainda não amortizado. No exemplo acima: R$ 5.000,00.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>4.4.</strong> Essa política garante que, mesmo no pior cenário, o CONTRATANTE não sairá prejudicado, preservando sua confiança e segurança.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>4.5.</strong> O objetivo da CONTRATADA é sempre operar com estabilidade, transparência e lucratividade, buscando evitar qualquer situação de risco elevado, sendo esta política acionada somente em casos extremos.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">5. SERVIÇOS PRESTADOS</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A CONTRATADA realizará:
                    <ul>
                      <li>Análises estatísticas e técnicas de eventos esportivos;</li>
                      <li>Definição e execução de estratégias de apostas;</li>
                      <li>Operação dos valores enviados pelo CONTRATANTE em plataformas legítimas de apostas;</li>
                      <li>Envio de informações gerais de desempenho, quando aplicável.</li>
                    </ul>
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">6. RISCOS E AUSÊNCIA DE GARANTIA</h3>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>6.1.</strong> Apostas esportivas envolvem riscos significativos, podendo gerar perdas parciais ou totais dos valores utilizados.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>6.2.</strong> Resultados anteriores não garantem resultados futuros.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>6.3.</strong> O CONTRATANTE declara ciência de que participa por sua livre escolha e sob sua responsabilidade.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">7. OBRIGAÇÕES DO CONTRATANTE</h3>
                  <p className="text-gray-600 leading-relaxed">
                    <ul>
                      <li>Fornecer dados reais e atualizados;</li>
                      <li>Avaliar sua condição financeira antes de aportar valores;</li>
                      <li>Reconhecer que as operações envolvem risco;</li>
                      <li>Utilizar os serviços em conformidade com este contrato.</li>
                    </ul>
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">8. OBRIGAÇÕES DA CONTRATADA</h3>
                  <p className="text-gray-600 leading-relaxed">
                    <ul>
                      <li>Operar com diligência, responsabilidade e profissionalismo;</li>
                      <li>Empregar seus melhores esforços, sem garantir resultados;</li>
                      <li>Utilizar os valores exclusivamente em apostas esportivas;</li>
                      <li>Manter sigilo de dados e cumprir a legislação aplicável;</li>
                      <li>Respeitar integralmente a Política de Devolução Proporcional descrita na Cláusula 4.</li>
                    </ul>
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">9. POLÍTICA DE VALORES, SALDO E SAQUES</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Valores transferidos pelo CONTRATANTE serão utilizados exclusivamente nas operações esportivas.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Solicitações de saque seguirão os procedimentos internos e prazos operacionais da CONTRATADA, podendo haver ajustes para atender às melhores práticas de segurança financeira.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Custos ou taxas serão informados antecipadamente.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">10. PRIVACIDADE E PROTEÇÃO DE DADOS</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A CONTRATADA trata dados pessoais conforme a Lei Geral de Proteção de Dados – LGPD (Lei 13.709/2018), mantendo políticas internas de sigilo e segurança.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">11. VIGÊNCIA E RESCISÃO</h3>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>11.1.</strong> Vigência se inicia na data de aceitação do CONTRATANTE.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>11.2.</strong> Ambas as partes podem rescindir mediante aviso prévio de 30 dias, mantendo obrigações pendentes.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>11.3.</strong> Em caso de rescisão, o CONTRATANTE tem direito à devolução proporcional do capital conforme a Cláusula 4.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">12. ALTERAÇÕES DOS TERMOS</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A CONTRATADA poderá atualizar este contrato mediante aviso prévio ao CONTRATANTE. A continuidade do uso implica aceitação das alterações.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">13. FORO</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Fica eleito o foro da comarca da sede da CONTRATADA.
                  </p>
                </section>

                <section>
                  <h3 className="font-semibold text-lg mb-2">14. DISPOSIÇÕES GERAIS</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Este contrato substitui documentos anteriores e representa o acordo integral entre as partes.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Em caso de nulidade parcial, as demais disposições permanecem válidas.
                  </p>
                </section>

                <div className="border-t pt-4 mt-6">
                  <h3 className="font-semibold text-lg mb-2 text-red-500">AVISO LEGAL IMPORTANTE</h3>
                  <p className="text-xs text-gray-500">
                    A InvestBet Capital atua exclusivamente com apostas esportivas, classificadas como entretenimento. Não presta consultoria financeira, não garante lucros e não está sujeita à regulação da CVM ou do Banco Central. Participação envolve riscos.
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
