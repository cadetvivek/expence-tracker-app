// Retrieve expenses from local storage or initialize an empty array
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// Get elements
const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');

// Function to render expenses
function renderExpenses() {
  // Clear expense list
  expenseList.innerHTML = '';

  // Render each expense
  expenses.forEach((expense, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${expense.amount} - ${expense.description} - ${expense.category}</span>
      <span class="delete-btn" onclick="deleteExpense(${index})">Delete</span>
    `;
    expenseList.appendChild(li);
  });
}

// Function to add expense
function addExpense(e) {
  e.preventDefault();

  // Get input values
  const amount = document.getElementById('expense').value;
  const description = document.getElementById('description').value;
  const category = document.getElementById('category').value;

  // Create new expense object
  const expense = {
    amount,
    description,
    category
  };

  // Add expense to expenses array
  expenses.push(expense);

  // Update local storage
  localStorage.setItem('expenses', JSON.stringify(expenses));

  // Clear input fields
  expenseForm.reset();

  // Render expenses
  renderExpenses();
}

// Function to delete expense
function deleteExpense(index) {
  // Remove expense from expenses array
  expenses.splice(index, 1);

  // Update local storage
  localStorage.setItem('expenses', JSON.stringify(expenses));

  // Render expenses
  renderExpenses();
}

// Event listener for form submission
expenseForm.addEventListener('submit', addExpense);

// Render expenses on page load
renderExpenses();
