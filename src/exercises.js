const bstree = require('./bstree')
const queue = require('./queue')
// How many searches?
// a.
// 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 
// searching for 8
// order of numbers searched by recursive binary search alg: 12, 6, 8

// b.
// searching for 16
// order of numbers searched by recursive binary search alg: 12, 17, 14, 15 then returns -1

// 3. find a book:
// 1. use a binary search to locate a book matching the dewey call number
// 2. search to the right of the binary search result for books matching number and title
// 3. if still not found, search to the left of binary search result for books matching number and title

/*

function deweyNumSearch(array, value, start, end) {
    
    //array contains all dewey call numbers and is sorted
    //value is the dewey call number we are looking for
    
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item == value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
};

function rightBound(array, value, ind, title) {
    
    //array is the collection of books
    //value is the dewey call number
    //ind is the index of the book found using the binary search
    //this function will search to the right of ind for a book matching number and title
    
    for (let i = ind; i < array.length; i++) {
        if (array[i][0] == value && array[i][1] == title) {
            return i;
        }
    }
    return false;
};

function leftBound(array, value, ind) {
    for (let i = ind; i >= 0; i--) {
        if (array[i][0] == value && array[i][1] == title) {
            return i;
        }
    }
    return false;
};

let firstResultIndex = deweyNumSearch(array, value, start, end)
let result = rightBound(firstResultIndex)

if (!result) {
    result = leftBound(firstResultIndex)
}
*/

// 4. Searching in a BST
// 1. post-order traversal: 14, 19, 15, 27, 25, 91, 79, 90, 89, 35
// 2. pre-order traversal: 8, 6, 5, 7, 10, 9, 11

// 5. Implement different tree traversals
// inOrder(), preOrder(), and postOrder()


function main2() {
    let temp = new bstree;
    let arr = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
    //console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        temp.insert(arr[i],arr[i])
    }

    return temp
}


let bst = main2()

function inOrder(t) {
    if (t == null) {
      return;
    }

    inOrder(t.left);
    console.log(t.value);
    inOrder(t.right);
}

//inOrder(bst);

function preOrder(t) {
    if (t == null) {
      return;
    }

    console.log(t.value);
    inOrder(t.left);
    inOrder(t.right);
}

//preOrder(bst);

function postOrder(t) {
    if (t == null) {
      return;
    }
    
    console.log(t.value);
    inOrder(t.left);
    inOrder(t.right);
}

//postOrder(bst);

// 6. Find the next commanding officer
// For this question, a breadth-first search is needed

function bfs(tree, values = []) {
    let newQ = new queue; // Assuming a Queue is implemented (refer to previous lesson on Queue)
    const node = tree.root;
    newQ.enqueue(node);
    while (newQ.length) {
        const node = newQ.dequeue(); //remove from the queue
        values.push(node.value); // add that value from the queue to an array

        if (node.left) {
            newQ.enqueue(node.left); //add left child to the queue
        }

        if (node.right) {
            newQ.enqueue(node.right); // add right child to the queue
        }
    }

    return values;
}

// 7. max profit
let prices =  [128, 97, 121, 123, 98, 97, 105]

function max(arr) {
    let diff1 = 0;
    let diff2 = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (j > i) {
                diff2 = arr[i] - arr[j]
                if (diff2 > diff1) {
                    diff1 = diff2
                }
            }
        }
    }
    return diff1;
}

console.log(max(prices))