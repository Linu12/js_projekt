// Binary search assumes the array (or any other data structure) you are searching in is ordered.

// We start with the array, and the item we need to search for.

// We look at the middle of the array. We take the number of elements, and we divide it by 2. Imagine we have a part of the array on the left, and the other part on the right.

// If the item we have is lower than the one we’re looking for, then it must be in the right part, so we can completely discard the part on the right.

// Then we perform the same action, dividing the right part of the array in 2, looking at the middle item, and we throw away part of the array.

// In the end, you will get the item (or you will return null if the item is not found).

// In the end, if the array had 8 items, we find the item in at most 4 steps.

// If the array had 32 items, we have a maximum of 6 steps in the worst case. Compared to 32 in linear search, that’s a huge optimization!

// Binary search has O(log n) complexity.

function binarySearch(list, item) {
    let low = 0
    let high = list.length - 1

    while (low <= high) {
        const mid = Math.floor((low + high) / 2) // środek tablicy
        const guess = list[mid] // szukana na środek tablicy

        if (guess === item) {
            return mid
        }

        if (guess > item) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return null //if not found
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 7));