import { Play } from '@phosphor-icons/react'
import {
  HomeContainer,
  FormContainer,
  CountdownContainer,
  Separator,
  StartCountdownButton,
  TaskInput,
  MinutesAmountInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em </label>
          <TaskInput
            id="task"
            list="task-suggestion"
            placeholder="Dê um nome para o seu projeto"
          />

          <datalist id="task-suggestion">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto Banana" />
          </datalist>

          <label htmlFor="minutesAmount">Durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}