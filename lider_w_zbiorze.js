// https://edu.cs-htiew.com/pl/algorytmy/wyszukiwanie/znajdowanie-lidera-w-zbiorze

// funkcja SzukajLidera(n, A)
//     1. lider := 0
//     2. ile := 0
//     3. Od i := 1 do n, wykonuj:
//         4. Jeżeli ile = 0, to:
//             5. lider := A[i]
//             6. ile := 1

//         7. w przeciwnym przypadku, jeżeli lider = A[i]:
//             8. ile := ile + 1

//         9. w przeciwnym przypadku:
//             10. ile := ile - 1

//     11. ile := 0
//     12. Od i := 1 do n, wykonuj:
//         13. Jeżeli A[i] = lider, to:
//             14. ile := ile + 1

//     15. Jeżeli ile > n/2, to:
//         16. Zwróć lider, zakończ

//     17. w przeciwnym przypadku:
//         18. Zwróć -1, zakończ

function szukajLidera(n, A) {

    let lider = 0;
    let ile = 0;

    for (let i = 0; i < A.length - 1; i++) {
        if (lider == 0) {
            lider = A[i];
            ile = 1;
        } else if (lider == A[i]) {
            ile = ile + 1;
        } else {
            ile = ile - 1;
        }
    }

    ile = 0;

    for (let i = 0; i < A.length - 1; i++) {
        if (A[i] == lider) {
            ile = ile + 1;
        }

        if (ile > n / 2) {
            return lider;
        } else {
            return -1;
        }
    }



}

console.log(szukajLidera(3, [3, 3, 3, 3, 2, 1, 3, 3]));