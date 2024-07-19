import { useEffect, useState } from "react";

interface TransactionProps {
    id: number,
    description: string,
    type: 'income' | 'outcome',
    price: number,
    category: string,
    createdAt: string
}

export function Exemplos() {
    const [transactions, setTransactions] = useState<TransactionProps[]>([]);
    
    /* vai disparar a função apenas uma unica vez, ao inves de sempre que o componente renderizar
       obs: nao podemos usar funções assincronas dentro do useEffect, no arquivo exemplo.tsx tem um modelo de 
       como poderiamos usar as funções assincronas dentro do useEffect, retornando a mesma coisa que retornamos aqui */
       useEffect(() => {
        fetch('http://localhost:3000/transactions')//chama a url, e irá devolver uma resposta através do conceito de promise (.then)
        .then(response => response.json()) //retorna no formato de objeto javascript através de uma promise
        .then(data => { 
            setTransactions(data)
        })
    }, [])

    console.log(transactions)

    
}