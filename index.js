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
  checker(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Trying to access index out of bound");
    }
  }
  hashkey(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.length;
    }

    return hashCode;
  }
  set(key, value) {
    this.checker(this.hashkey(key));
    let newNode = new node(key, value);
    this.bucket[this.hashkey(key)] = newNode;
  }
  get(key) {
    let arrayEl = this.bucket[this.hashkey(key)];
    if (arrayEl == null) {
      return null;
    } else if (arrayEl.key == key) return arrayEl.value;
    else {
      let temp = arrayEl;
      while (temp != null) {
        if (temp.key == key) {
          return temp.value;
        }
        temp = temp.nextNode;
      }
      return null;
    }
  }
  has(key) {
    if (this.bucket[this.hashkey(key)] == null) {
      return false;
    } else {
      let temp = this.bucket[this.hashkey(key)];
      while (temp != null) {
        if (temp.key == key) {
          return true;
        }
        temp = temp.nextNode;
      }
      return false;
    }
  }
  clear() {
    this.bucket = new Array(16).fill(null);
  }
  remove(key) {
    if (!this.has(key)) {
      return false;
    } else {
      let temp = this.bucket[this.hashkey(key)];
      while (temp != null) {
        if (
          this.bucket[this.hashkey(key)].key == key &&
          this.bucket[this.hashkey(key)].next == null
        ) {
          this.bucket[this.hashkey(key)] = null;
        }
        if (temp.key == key) {
          let holder = { ...temp.next };
          console.log(holder);
          console.log(temp);
          temp = 5;
          return true;
        }
        temp = temp.nextNode;
      }
    }
  }
}
const newMap = new hashMap();
newMap.set("Aymen", "Loudiy");
console.log(newMap.remove("Aymen"));
console.log(newMap.bucket);
