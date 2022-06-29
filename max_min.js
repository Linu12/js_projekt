// odnajdowanie maksimum w zbiorze

// pseudokod
// funkcja findMax(arr):
//     1. maks := A[0]
//     2. Od i := 0 do n, wykonuj:
//         3. Jeżeli maks < A[i], to:
//             4. maks := A[i]

//     5. Zwróć maks, zakończ

function findMax(arr) {

    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > max) {
            max = arr[i];
        }

    }

    return max;
}

console.log(findMax([1, 9920, 3, 4, 500, 6000]));

// znajdź minimalną wartość w tablicy




//znajdź index wartości maksymalnej

// funkcja SzukajIndeksMaks(n, A):
//     1. maks := A[0]
//     2. ind := 0
//     3. Od i := 0do n, wykonuj:
//         4. Jeżeli maks < A[i], to:
//             5. maks := A[i]
//             6. ind := i

//7.  Zwróć ind, zakończ    

//znajdź index wartości minimalnej

// min max jednocześnie

function min_Max(arr) {

    let min = arr[0];
    let max = arr[0];



    for (let i = 0; i < arr.length; i++) {

        if (min > arr[i]) {
            min = arr[i];

        }

        if (max < arr[i]) {
            max = arr[i];

        }
    }
    //  return max;
    return { min, max };
}

console.log(min_Max([10, 3, 4, 6, 2, 7, -1]));