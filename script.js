// Variables:
// 1. INPUT DATA
let itemPrice = 800;        // Raw price of the item
let isVipCustomer = true;   // Loyalty status
let taxRate = 0.18;         // 18% GST/Tax
let discountValue = 150;    // Flat discount amount


// 2. ARITHMETIC OPERATORS (Calculate totals)
let taxAmount = itemPrice * taxRate; 
let totalBeforeDiscount = itemPrice + taxAmount;

// 3. RELATIONAL & LOGICAL OPERATORS (Check eligibility)
// Rule: Total must be over 500 AND customer must be a VIP
let qualifiesForDiscount = (totalBeforeDiscount > 500) && (isVipCustomer === true);

// 4. CALCULATING FINAL RESULT
let finalBill;

if (qualifiesForDiscount) {
    // Subtracting the discount using Arithmetic Operator
    finalBill = totalBeforeDiscount - discountValue;
    console.log("Status: Discount Applied!");
} else {
    finalBill = totalBeforeDiscount;
    console.log("Status: No Discount Applicable.");
}

// 5. DISPLAY RESULTS
console.log("Item Price: $" + itemPrice);
console.log("Tax Added: $" + taxAmount);
console.log("Total Bill: $" + finalBill);