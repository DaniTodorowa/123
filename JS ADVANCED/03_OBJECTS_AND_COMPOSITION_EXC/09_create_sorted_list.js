function createSortedList() {
    return {
        arr: [],
        add(elemenent) {
            this.arr.push(elemenent);
            this.arr.sort((a, b) => a - b);
            this.size++;
        },
        remove(index) {
            if (index >= 0 && index < this.arr.length) {
                this.arr.splice(index, 1);
                this.size--;
            }
        },
        get(index) {
            if (index >= 0 && index < this.arr.length) {
                return this.arr[index];
            }
        },
        size: 0,
    }
}