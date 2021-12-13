import { Container } from "./styles";

export function TransactionTable(){
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>13/12/2021</td>
                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">R$1.000,00</td>
                        <td>Casa</td>
                        <td>13/12/2021</td>
                    </tr>

                    <tr>
                        <td>Venda de Carro</td>
                        <td className="deposit">R$20.000,00</td>
                        <td>Casa</td>
                        <td>13/12/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}