// eslint-disable-next-line
import { directive } from "@babel/types";

const DEFAULT_SLEEP_MS = 10;
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const createArrayWithRange = (max) => {
    let array = []
    for (let i = 1; i <= max; i++) {
        array.push(i)
    }
    return array;
}

const sorts = {
    bubble: async (array, callback) => {
        for (let end = array.length - 1; end > 0; end--) {
            for (let i = 0; i < end; i++) {
                if (array[i] > array[i + 1]) {
                    let temp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = temp;
                    callback(array);
                }
                await sleep(DEFAULT_SLEEP_MS);
            }
        }
    },
    quick: async (array, callback) => {
        const quickSort = async (array, left, right) => {
            if (left >= right) return;
            // choose pivot
            const pivot = array[right];
            const separation = await partition(array, left, right, pivot);
            await quickSort(array, left, separation - 1);
            await quickSort(array, separation, right);
        }
        const partition = async (array, left, right, pivot) => {
            while (left < right) {
                // move left pointer until it should be moved (it is bigger than pivot)
                while (array[left] < pivot) {
                    left++;
                }
                // move right pointer until it should be moved (it is smaller than pivot)
                while (array[right] > pivot) {
                    right--;
                }
                // swap
                const temp = array[left];
                array[left] = array[right];
                array[right] = temp;
                // callback here
                callback(array);
                // that.setState({
                //     array: array,
                //     comparingIndexes: [array[left], array[right]]
                // });
                await sleep(DEFAULT_SLEEP_MS);
            }
            // return the new separation point
            return right;
        }
        await quickSort(array, 0, array.length - 1);
        callback(array);
        // this.setState({comparingIndexes: []});
    },
    merge: (array, callback) => {
        const mergeSort = async (array) => {
            // divide
            let mid = Math.floor(array.length / 2);
            if(array.length <= 1){
                return array;
            }
            let lArray = array.slice(0, mid);
            let rArray = array.slice(mid);
            let mL = await mergeSort(lArray);
            let mR = await mergeSort(rArray);
            // if({}){
            //     return array;
            // }
            return mGlue(mL, mR);
        }
        const mGlue = async (lArray, rArray) => {
            // combine
            let newArray = [];
            let lSize = lArray.length;
            let rSize = rArray.length;
            let i = 0;
            let j = 0;
            // console.log("mGlue");
            // placing the values in a new array in order, comparing left and right
            while(i < lSize && j < rSize){
                // console.log("mGlue while ");
                if(lArray[i] < rArray[j]){
                    newArray.push(lArray[i]);
                    i++;
                    // console.log("while if");
                }
                else{
                    // console.log("else");
                    newArray.push(rArray[j]);
                    j++;
                }
                callback(newArray);
                await sleep(DEFAULT_SLEEP_MS);
            }
            return newArray
                .concat(lArray.slice(i))
                .concat(rArray.slice(j)); 
        }
        // this is the main part i guess
        mergeSort(array);
    },
    binary: (array, callback) =>{
        const binarySearch = async (array) =>{
        


        }
    }
}
export {
    createArrayWithRange,
    sorts,
};