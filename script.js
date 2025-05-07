document.addEventListener('DOMContentLoaded', () => {

    // Object to store bank data: quantity and current amount, and element IDs
    let bankData = {
        "Mpay": {
            quantity: 0,
            amount: 0,
            amountElementId: "mpayAmount",
            quantityElementId: "mpayQuantityDisplay", // ID for the quantity display span
            barElementId: "mpayBar",
            barAmountElementId: "mpayBarAmount"
        },
        "中銀": {
            quantity: 0,
            amount: 0,
            amountElementId: "bocAmount",
            quantityElementId: "bocQuantityDisplay",
            barElementId: "bocBar",
            barAmountElementId: "bocBarAmount"
        },
        "工商": {
            quantity: 0,
            amount: 0,
            amountElementId: "icbcAmount",
            quantityElementId: "icbcQuantityDisplay",
            barElementId: "icbcBar",
            barAmountElementId: "icbcBarAmount"
        },
        "大豐": {
            quantity: 0,
            amount: 0,
            amountElementId: "taifungAmount",
            quantityElementId: "taifungQuantityDisplay",
            barElementId: "taifungBar",
            barAmountElementId: "taifungBarAmount"
        }
    };

    // Get references to key DOM elements
    const totalAmountElement = document.getElementById('totalAmount');
    const quantitySelects = document.querySelectorAll('.quantity-select');
    // const amountButtons = document.querySelectorAll('.amount-button'); // Not needed directly due to delegation
    const bankSections = document.querySelectorAll('.bank-section');
    const resetAllButton = document.getElementById('resetAll');
    // const barChartContainer = document.querySelector('.bar-chart-container'); // Not strictly needed for logic

    // Maximum height for the bar chart bars in pixels
    const maxBarHeightPx = 100; // Adjust as needed for visual appearance

    // --- Functions to update display ---

    function updateTotalDisplay() {
        let total = 0;
        for (const bank in bankData) {
            total += bankData[bank].amount;
        }
        totalAmountElement.textContent = `總計: $${total}`;
    }

    function updateBankDisplay(bankName) {
        const bank = bankData[bankName];
        // Update current accumulated amount text
        document.getElementById(bank.amountElementId).textContent = `$${bank.amount}`;
        // Update selected quantity text
        document.getElementById(bank.quantityElementId).textContent = `(已選: ${bank.quantity})`;
         // Update bar amount text
        document.getElementById(bank.barAmountElementId).textContent = `$${bank.amount}`;
    }

    function updateBarChart() {
        // Find the maximum amount among all banks for scaling
        let maxAmount = 0;
        for (const bank in bankData) {
            if (bankData[bank].amount > maxAmount) {
                maxAmount = bankData[bank].amount;
            }
        }

        // Update the height of each bar
        for (const bankName in bankData) {
            const bank = bankData[bankName];
            const barElement = document.getElementById(bank.barElementId);
            const barAmountElement = document.getElementById(bank.barAmountElementId);


            if (maxAmount === 0) {
                // If total amount is 0, set all bar heights to 0 and hide bar amount text
                barElement.style.height = '0px';
                 barAmountElement.style.display = 'none';
            } else {
                // Calculate height as a percentage of max amount, scaled to maxBarHeightPx
                const height = (bank.amount / maxAmount) * maxBarHeightPx;
                barElement.style.height = `${height}px`;
                 barAmountElement.style.display = ''; // Ensure bar amount text is visible if amount > 0
            }
             // The position of the amount text above the bar is handled by CSS (bottom: 100%, absolute)
        }
    }

    // Function to update all relevant parts of the display
    function updateAllDisplays() {
        updateTotalDisplay();
        // Update individual bank displays (amount and quantity text)
        for (const bankName in bankData) {
            updateBankDisplay(bankName);
        }
        updateBarChart();
    }

    // --- Event Listeners ---

    // Listen for changes on quantity dropdowns
    quantitySelects.forEach(select => {
        select.addEventListener('change', (event) => {
            const bankSection = event.target.closest('.bank-section');
            const bankName = bankSection.dataset.bank;
            const newQuantity = parseInt(event.target.value, 10);

            bankData[bankName].quantity = newQuantity;

            // --- Optional: Reset amount when quantity changes? ---
            // Uncomment the following line if you want changing the quantity
            // to reset the accumulated amount for that bank.
            // bankData[bankName].amount = 0;
            // -------------------------------------------------------

            // Update display for this specific bank and the overall display
            updateBankDisplay(bankName); // Update quantity text for this bank
            updateTotalDisplay(); // Update total
            updateBarChart(); // Update bars
        });
    });

    // Listen for clicks on amount buttons using event delegation on bank sections
    bankSections.forEach(section => {
        section.addEventListener('click', (event) => {
            // Check if the clicked element is an amount button
            if (event.target.classList.contains('amount-button')) {
                const bankName = section.dataset.bank;
                const amountToAdd = parseInt(event.target.dataset.amount, 10);

                // Add the amount to the specific bank's total
                bankData[bankName].amount += amountToAdd;

                // Update display for this specific bank and the overall display
                updateBankDisplay(bankName); // Update amount text for this bank
                updateTotalDisplay(); // Update total
                updateBarChart(); // Update bars
            }
        });
    });

     // Listen for click on reset button
    resetAllButton.addEventListener('click', () => {
        // Reset data for all banks
        for (const bankName in bankData) {
            bankData[bankName].quantity = 0; // Reset internal quantity data
            bankData[bankName].amount = 0; // Reset internal amount data

             // Also reset the visual state of the quantity dropdowns
             // Need to map bank name back to the correct select element ID if not using the bank name directly
             let selectId;
             if(bankName === "Mpay") selectId = "mpayQuantity";
             else if (bankName === "中銀") selectId = "bocQuantity";
             else if (bankName === "工商") selectId = "icbcQuantity";
             else if (bankName === "大豐") selectId = "taifungQuantity";

             if(selectId) {
                document.getElementById(selectId).value = '0'; // Set dropdown value to 0
             }
        }
        // Update all displays after resetting data
        updateAllDisplays();
    });


    // Initial display update when the page loads
    updateAllDisplays();

});