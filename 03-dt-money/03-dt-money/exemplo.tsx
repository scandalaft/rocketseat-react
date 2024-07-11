import { useEffect } from "react";

export function Exemplos() {
    async function loadTransactions() {
        const response = await fetch('http://localhost:3000/transactions')
        const data = await response.json();

        console.log(data)
    }

    useEffect(() => {
        loadTransactions();
    }, [])
}