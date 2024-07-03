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

const convertTime = (date: Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return hours * 60 + minutes;
};
console.log(convertTime(new Date()) + " minutes");

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

const startOfWeek = (date: Date) => {
  // get date (1-31) -> day (0 - 6)
  var diff =
    date.getDate() - date.getDay() + 1 + (date.getDay() === 0 ? -6 : 0);
  console.log(diff);
  return new Date(date.setDate(diff));
};

console.log("TEST: ", startOfWeek(new Date(2024, 6, 2)));

//* Bai 8:

const endOfWeek = (date: Date) => {
  // get date (1-31) -> day (0 - 6)
  var diff = date.getDate() - date.getDay() + 1 + (date.getDay() === 0 ? 0 : 6);
  return new Date(date.setDate(diff));
};

console.log(endOfWeek(new Date()));
//* Bai 9:

const coundownToTetHoliday = (countdownDate: Date = new Date(2025, 0, 1)) => {
  const coundownIntervalTimer = setInterval(() => {
    const now = new Date();
    const distance = countdownDate.getTime() - now.getTime();

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    console.log(`${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`);

    if (distance < 0) {
      clearInterval(coundownIntervalTimer);
    }
  }, 1000);
};

// coundownToTetHoliday();

//* Bai 10:
const calcTime = (time: string, x: number) => {
  if (!time.match(/^(0-9)[2]:(0-9)[2]:(0-9)[2]$/))
    return "Thời gian không đúng định dạng";

  const [hours, minutes, seconds] = time.split(":");
  const date = new Date(+hours, +minutes, +seconds);
  date.setSeconds(date.getSeconds() + +x);

  const _hours = date.getHours();
  const _minutes = date.getMinutes();
  const _seconds = date.getSeconds();

  return `${_hours} giờ ${_minutes} phút ${_seconds} giây`;
};

calcTime("09:05:04", 10);
//* Bai 11:

const obj = {
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

function resetData(obj: any) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "string") {
        obj[key] = "";
      } else if (typeof obj[key] === "number") {
        obj[key] = 0;
      } else if (typeof obj[key] === "boolean") {
        obj[key] = false;
      } else if (Array.isArray(obj[key])) {
        if (typeof obj[key][0] === "number") {
          for (let i = 0; i < (obj[key] as number[]).length; i++) {
            if (typeof obj[key][i] === "number") {
              obj[key][i] = 0;
            }
            if (typeof obj[key][i] === "string") {
              obj[key][i] = "";
            }
            if (typeof obj[key][i] === "boolean") {
              obj[key][i] = false;
            }
          }
        }
      } else if (obj[key] !== null && typeof obj[key] === "object") {
        resetData(obj[key]);
      } else {
        obj[key] = null;
      }
    }
  }
  return obj;
}

console.log("Before reset:", obj);
resetData(obj);
console.log("After reset:", obj);
