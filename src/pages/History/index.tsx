import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CyclesContext } from '../../contexts/CyclesContext'
import { Clipboard } from 'phosphor-react'
import { HistoryContainer, HistoryList, HistoryEmpty, Status } from './styles'

export function History() {
  const { cycles } = useContext(CyclesContext)
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <pre>{JSON.stringify(cycles, null, 2)}</pre>
      {cycles.length <= 0 ? (
        <HistoryEmpty>
          <h2>Histórico vazio</h2>
          <Clipboard size={40} />
        </HistoryEmpty>
      ) : (
        <HistoryList>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Início</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {cycles.map((cycle) => {
                return (
                  <tr key={cycle.id}>
                    <td>{cycle.task}</td>
                    <td>
                      {cycle.minutesAmount}
                      minutos
                    </td>
                    <td>
                      {formatDistanceToNow(cycle.startDate, {
                        addSuffix: true,
                        locale: ptBR,
                      })}{' '}
                      minutos
                    </td>
                    <td>
                      {cycle.finishDate && (
                        <Status statusColor={'green'}>Concluído</Status>
                      )}
                      {cycle.interruptedDate && (
                        <Status statusColor={'red'}>Interrompido</Status>
                      )}
                      {!cycle.finishDate && !cycle.interruptedDate && (
                        <Status statusColor={'yellow'}>Em andamento</Status>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </HistoryList>
      )}
    </HistoryContainer>
  )
}
