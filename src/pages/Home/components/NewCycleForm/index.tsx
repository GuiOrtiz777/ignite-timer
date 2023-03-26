import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

import { FormContainer, TaskInput, MinutesAmountInput } from './styles'
import { CyclesContext } from '../..'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <div>
        <label htmlFor="task">Vou trabalhar em: </label>
        <TaskInput
          id="task"
          list="task-suggestions"
          placeholder="Dê um nome para seu projeto"
          disabled={!!activeCycle}
          {...register('task')}
        />

        <datalist id="task-suggestions">
          <option value="Projeto 1" />
          <option value="Projeto 2" />
          <option value="Projeto 3" />
          <option value="Projeto 4" />
        </datalist>

        <label htmlFor="minutesAmount">Vou trabalhar em: </label>
        <MinutesAmountInput
          type="number"
          placeholder="00"
          id="minutesAmount"
          step={5}
          max={60}
          min={5}
          disabled={!!activeCycle}
          {...register('minutesAmount', { valueAsNumber: true })}
        />
        <span>minutos.</span>
      </div>
    </FormContainer>
  )
}
