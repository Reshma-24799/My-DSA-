function calculateMinProcessingSteps(transactionLedger) {
    let steps = 0;

    while (true) {
        let reduced = false;

        for (let i = 0; i < transactionLedger.length; i++) {
            let char = transactionLedger[i];
            let left = i - 1;
            let right = i + 1;

            // Find first same character to the left
            while (left >= 0 && transactionLedger[left] !== char) left--;

            // Find first same character to the right
            while (right < transactionLedger.length && transactionLedger[right] !== char) right++;

            if (left >= 0 || right < transactionLedger.length) {
                // Remove left, current, right (if exist)
                let toRemove = new Set([i]);
                if (left >= 0) toRemove.add(left);
                if (right < transactionLedger.length) toRemove.add(right);

                transactionLedger = transactionLedger
                    .split('')
                    .filter((_, idx) => !toRemove.has(idx))
                    .join('');

                steps++;
                reduced = true;
                break; // Start next iteration from beginning
            }
        }

        if (!reduced) break;
    }

    return steps;
}

// Examples
console.log(calculateMinProcessingSteps("baabacaa")); // Output: 3
console.log(calculateMinProcessingSteps("abbaaa"));    // Output: 2
console.log(calculateMinProcessingSteps("abcaa"));     // Output: 0
