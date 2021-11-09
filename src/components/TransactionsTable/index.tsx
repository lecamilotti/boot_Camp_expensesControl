import { Container } from "./styles";

export function TransactionsTable() {
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Web Dev</td>
            <td className="deposit">$5000</td>
            <td>Freelancer</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td className="withdraw">$5000</td>
            <td>HouseHold</td>
            <td>20/02/2021</td>
          </tr>
         
        </tbody>
      </table>
    </Container>
  )

}