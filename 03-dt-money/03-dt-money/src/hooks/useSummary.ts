import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";

export function UseSummary() {
    const { transactions } = useContext(TransactionsContext);

    /* o reduce permite percorrer o array e reduzir ele a uma nova estrutura de dados
       nesse caso em um objeto com a seguinte estrutura { income: 0, outcome: 0, total: 0 } 
       onde passamos uma função como primeiro parametro, passando o accumulator (objeto que criamos) 
       e cada transaction, e a estrutura como segundo*/
    const summary = transactions.reduce(
        (acc, transaction) => {
            if(transaction.type == 'income') {
                acc.income += transaction.price;
                acc.total += transaction.price;
            } else {
                acc.outcome += transaction.price;
                acc.total -= transaction.price;
            }
            return acc;
        }, 
        { 
            income: 0, 
            outcome: 0, 
            total: 0 
        }
    )

    return summary
}