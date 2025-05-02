function rotate(arr, num) {
    for (let i = 0; i < num; i++) {

        popped = arr.pop();

        // console.log(popped)

        // prepend the popped item (last item) to the beginning of the array
        arr = [popped].concat(arr);
    }

    return arr;
}

const a1 = ["Harry","Sarah","Oscar","Tina"];
const gfdgdg = 2;

const res = rotate(a1, gfdgdg);

console.log(res);

function rotatev2(arr, num) {
    // we need to do `num` times of the `pop` operation
    for (let i = 0; i < num; i++) {
        
        popped = arr.pop();

        // prepend the popped item (last item) to the beginning of the array
        arr.unshift(popped);
    }
}

const arrv2 = ["Harry","Sarah","Oscar","Tina"];
const numv2 = 2;

rotatev2(arrv2, numv2);

console.log(arrv2);
