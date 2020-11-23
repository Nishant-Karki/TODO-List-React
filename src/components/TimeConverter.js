export const TodayTime = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const today = new Date();
  const monthName = months[today.getMonth()];

  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];
  const dayName = day[today.getDay()];
  const date = today.getDate();
  const final = `${dayName}, ${monthName} ${date}`;
  return final;
};
