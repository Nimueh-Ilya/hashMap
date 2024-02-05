class node {
  constructor(key, value = null) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}
class hashMap {
  constructor() {
    this.bucket = new Array(16).fill(null);
    this.length = this.bucket.length;
  }
  hashkey(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + (key.charCodeAt(i) % this.length);
    }

    return hashCode;
  }
  set(key, value) {
    let arrayEl = this.bucket[hashCode(key)];
    let newNode = new node(key, value);
    arrayEl = newNode;
  }
}
const newMap = new hashMap();
console.log(newMap.hashkey("AYMEN"));
console.log(newMap.hashkey("AYMEN") % 16);
