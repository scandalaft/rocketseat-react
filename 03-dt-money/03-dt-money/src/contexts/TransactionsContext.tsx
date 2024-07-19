import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface TransactionProps {
    id: number,
    description: string,
    type: 'income' | 'outcome',
    price: number,
    category: string,
    createdAt: string
}

interface CreateTRansactionInput {
    description: string,
    price: number,
    category: string,
    type: 'income' | 'outcome',
}

interface TransactionContextType {
    transactions: TransactionProps[];
    fetchTransactions: (query?: string) => Promise<void>;
    createTransaction: (data: CreateTRansactionInput) => Promise<void>
}

interface TransactionsProviderProps {
    children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    //criando estado para armazenar as informações das transactions 
    const [transactions, setTransactions] = useState<TransactionProps[]>([]);

    async function fetchTransactions(query?: string) {
        const response = await api.get('transactions', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q: query,
            }
        })

        setTransactions(response.data)
    }

    async function createTransaction(data: CreateTRansactionInput) {
        const { description, category, price, type } = data;

        const response = await api.post('transactions', {
            description,
            category,
            price,
            type,
            createdAt: new Date(),
       })

       setTransactions(state => [response.data, ...state])
    } 

    useEffect(() => {
        fetchTransactions();
    }, [])
    
    return (
        <TransactionsContext.Provider value={{ 
            transactions,
            fetchTransactions,
            createTransaction,
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}