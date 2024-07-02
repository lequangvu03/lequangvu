/*-------------- ARRAY ------------- */

//* Bai 1:

const minNumbers = (arr) => {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
};

console.log(minNumbers([1, 3, 6, 2]));

//* Bai 2:

const max2Numbers = (arr) => {
  return arr.sort((a, b) => b - a)[1];
};

console.log(max2Numbers([1, 3, 4, 9, 7, 6]));

//* Bai 3:

const sortStudents = (arr) => {
  return arr.sort((a, b) => b.localeCompare(a));
};

console.log(sortStudents(["Nam", "Hoa", "Tuấn"]));

//* Bai 4:

let total = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 5 === 0) {
    total += i;
  }
}

console.log(total);

//* Bai 5:

const newArr = (oldArr) => {
  return oldArr.map((e) => e % 2);
};

console.log(newArr([1, 2, 6, 9, 3, 4]));

//* Bai 6:

const filterMaxLengthEls = (arr) => {
  const lengths = arr.map((e) => e.length);
  const maxLength = Math.max(...lengths);

  return arr.filter((e) => e.length === maxLength);
};

console.log(filterMaxLengthEls(["aba", "aa", "ad", "c", "vcd"]));

//* Bai 7:

const getRandomNumberInArray = (arr) => {
  const randomIndexEl = Math.floor(Math.random() * arr.length);

  return arr[randomIndexEl];
};

console.log(getRandomNumberInArray([1, 6, 3, 9, 8]));

//* Bai 8:

const exchangeRandomNumberInArry = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    const randomIndexEl = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[randomIndexEl]] = [arr[randomIndexEl], arr[i]];
  }

  return arr;
};

console.log(exchangeRandomNumberInArry([1, 6, 3, 9]));

//* Bai 9:

const similarity = (arr1, arr2) => {
  const result = [];
  const maxLengthOfArr = Math.max(arr1.length, arr2.length);
  const [copyArr, resArr] =
    arr1.length > arr2.length ? [arr2, arr1] : [arr1, arr2];

  for (let i = 0; i < maxLengthOfArr; i++) {
    if (copyArr.includes(resArr[i])) {
      result.push(resArr[i]);
    }
  }

  return [...new Set(result)];
};

console.log(similarity([1, 2, 3], [1, 2, 4]));

//* Bai 10:

const symmetricDifference = (arr1, arr2) => {
  const simi = similarity(arr1, arr2);
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!simi.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!simi.includes(arr2[i])) {
      result.push(arr2[i]);
    }
  }

  return result;
};

console.log(symmetricDifference([1, 2, 3], [1, 2, 4]));

//* Bai 11:

const subString = (str) => {
  if (str.length === 0) {
    return [""];
  }
  const firstChar = str[0];
  const rest = subString(str.slice(1));
  const subsetsWithFirstChar = rest.map((subset) => firstChar + subset);
  return [...rest, ...subsetsWithFirstChar];
};

console.log(subString("dog"));
//* Bai 12:

const isIncreasedArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) return false;
  }

  return true;
};

console.log(isIncreasedArr([4, 2, 1]));

const isIncreasedOddArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1] || arr[i] % 2 === 0) return false;
  }

  return true;
};

console.log(isIncreasedOddArr([5, 3, 1]));

/*-------------- OBJECT ------------- */

const user = {
  name: "Nguyễn Tiến Đạt",
  age: 30,
  email: "support@amela.vn",
  isStatus: true,
};

//* Bai 1:

const getKeysOfObject = (obj) => {
  return Object.keys(obj);
};

console.log(getKeysOfObject(user).join(", "));

//* Bai 2:
const getValuesOfObject = (obj) => {
  return Object.values(obj);
};

console.log(getValuesOfObject(user).join(", "));

//* Bai 3:

const checkKey = (obj, k) => {
  const keys = getKeysOfObject(obj);
  return keys.includes(k);
};

console.log(checkKey(user, "name"));

//* Bai 4:

const getLengthObject = (obj) => {
  const keys = getKeysOfObject(obj);
  return keys.length;
};

console.log(getLengthObject(user));

//* Bai 5:

const getUsers = (arrUsers) => {
  const result = arrUsers.filter(({ age, isStatus }) => age > 25 && isStatus);
  return result;
};

const users = [
  user,
  {
    name: "Le Quang Vu",
    age: 21,
    isStatus: true,
  },
  {
    name: "Vu Huu Tuy",
    age: 21,
    isStatus: false,
  },
];

console.log(getUsers(users));

// bind, call, apply

const person = {
  name: "Vu",
  age: 21,
};

function info(s1, s2) {
  return `${s1} ${this.name} - ${s2} ${this.age} tuoi`;
}

console.log(info.bind(person, "Toi ten la ", "Nam nay toi ").call());
console.log(info.call(person, "Toi ten la ", "Nam nay toi "));
console.log(info.apply(person, ["Toi ten la ", "Nam nay toi "]));
