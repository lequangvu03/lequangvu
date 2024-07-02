// Date

//* Bai 1:
const getCurrentDate = (separate: string = "/") => {
  const date = new Date();
  const day = date.getDay().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().padStart(2, "0");
  return `Datetime: ${day}${separate}${month}${separate}${year}`;
};

console.log(getCurrentDate());

//* Bai 2:

const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month - 1, 0).getDate();
};

console.log(getDaysInMonth(8, 2020));

//* Bai 3:
const isWeekend = (date: Date) => {
  const day = date.getDay();
  return day === 0 || day === 6;
};

const date = new Date(2024, 7, 31);
console.log(isWeekend(date));

//* Bai 4:

//* Bai 5:

const daysSinceStartOfYear = () => {
  const currentDate = new Date();
  const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
  const diffInTime = currentDate.getTime() - startOfYear.getTime();
  return Math.floor(diffInTime / (1000 * 60 * 60 * 24));
};

console.log(daysSinceStartOfYear());

//* Bai 6:

const calculateAge = (date: Date) => {
  return new Date().getFullYear() - date.getFullYear();
};

console.log(calculateAge(new Date(2003, 5, 5)));
//* Bai 7:
//* Bai 9:
//* Bai 10:
//* Bai 11:

type TData = {
  name: string;
  age: number;
  isStatus: boolean;
  a: {
    a: number[];
    b: {
      c: number;
    };
  };
  c: string[];
};

const obj: TData = {
  name: "Vu",
  age: 21,
  isStatus: true,
  a: {
    a: [1, 2, 3],
    b: {
      c: 2,
    },
  },
  c: ["a", "b", "c"],
};

function resetData(obj: TData) {}
