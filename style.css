body {
    font-family: sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f4f4f4;
    color: #333;
}

.container {
    max-width: 600px; /* Limit width on larger screens */
    margin: 0 auto; /* Center the container */
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1, h2, h3 {
    color: #0056b3;
    text-align: center;
    margin-bottom: 15px;
}

#totalAmount {
    font-size: 1.8em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
    color: #28a745; /* Green color for total */
}

/* Bar Chart Styling */
.bar-chart-container {
    display: flex;
    justify-content: space-around;
    align-items: flex-end; /* Align bars to the bottom */
    height: 150px; /* Fixed height for the chart area */
    margin-bottom: 30px;
    padding-top: 10px; /* Space for potential labels above */
    border-bottom: 1px solid #ccc; /* Base line for the chart */
    position: relative; /* For positioning bank-amount */
}

.bar-item {
    flex: 1; /* Distribute space equally */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end; /* Push bar to the bottom */
    position: relative; /* For absolute positioning of bank-amount */
    padding: 0 5px; /* Padding between bars */
}

.bar {
    width: 80%; /* Width of the bar itself */
    background-color: #007bff; /* Default bar color */
    height: 0; /* Initial height */
    transition: height 0.5s ease-in-out; /* Smooth animation */
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}

/* Specific bank colors for bars */
.mpay-bar { background-color: #ffc107; /* Yellow */ }
.boc-bar { background-color: #007bff; /* Blue */ }
.icbc-bar { background-color: #dc3545; /* Red */ }
.taifung-bar { background-color: #28a745; /* Green */ }


.bank-label {
    margin-top: 5px;
    font-size: 0.9em;
    color: #555;
    text-align: center;
}

.bank-amount {
    position: absolute;
    bottom: 100%; /* Position above the bar */
    left: 50%;
    transform: translateX(-50%); /* Center the amount text */
    font-size: 0.8em;
    font-weight: bold;
    color: #333;
    white-space: nowrap; /* Prevent wrapping */
    margin-bottom: 5px; /* Space between amount and bar */
}


.bank-section {
    background-color: #eee;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid #ddd;
}

.bank-section label {
    display: inline-block;
    margin-bottom: 10px;
    font-weight: bold;
}

.quantity-select {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-left: 10px;
    margin-bottom: 10px;
    font-size: 1em;
}

.bank-current-amount {
    font-weight: bold;
    color: #007bff;
}

.amount-buttons {
    display: flex;
    flex-wrap: wrap; /* Allow buttons to wrap on small screens */
    gap: 10px; /* Space between buttons */
    margin-top: 10px;
}

.amount-button {
    flex-grow: 1; /* Allow buttons to grow */
    flex-basis: calc(33% - 10px); /* Attempt 3 buttons per row on wider mobile */
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.2s ease;
    text-align: center;
}

.amount-button:hover {
    background-color: #0056b3;
}

/* Adjust button basis for smaller screens */
@media (max-width: 400px) {
    .amount-button {
         flex-basis: calc(50% - 10px); /* 2 buttons per row on very small screens */
    }
}

#resetAll {
    display: block; /* Make it a block element */
    width: 100%; /* Full width */
    padding: 12px;
    background-color: #dc3545; /* Red color for reset */
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1.1em;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.2s ease;
}

#resetAll:hover {
    background-color: #c82333;
}
