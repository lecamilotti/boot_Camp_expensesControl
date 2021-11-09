import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from "./styles";



export function Summary() {
  return(
    <Container>
      <div>
        <header>
          <p>Incomings</p>
          <img src={incomeImg} alt="Incomes" />
        </header>
        <strong>$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Outcomings</p>
          <img src={outcomeImg} alt="Outcomings" />
        </header>
        <strong>- $500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>$500,00</strong>
      </div>



      </Container>
  )
}