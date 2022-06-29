//Linear search, also called sequential or simple, is the most basic search algorithm. Given a data structure, for example an array, we search for an item by looking at all the elements, until we find it.
const linearSearch = (list, item) => {
    for (const [i, element] of list.entries()) {
        if (element === item) {
            return i;
        }
    }

    return null;

}

console.log(linearSearch([3, 5, 6, 8, 4, 2, 9], 30)) //3 (index start at 0)