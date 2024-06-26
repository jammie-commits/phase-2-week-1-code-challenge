import React from "react";

const TransactionList = ({ transactions, filter, id}) => {

  // filter records based on the category
  if (filter) {
    transactions = transactions.filter((transaction) => {
      return transaction.category.toLowerCase() === filter.toLowerCase();
    });
  }
  return (
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={id}>
            <td>{transaction.id}</td>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>  
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionList;