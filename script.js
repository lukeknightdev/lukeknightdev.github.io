const timeContainer = document.getElementById("time-container");
const birthDay = "05-03-2002";
const birthDayDate = new Date(birthDay);
const int1NumberFormatter = new Int1.NumberFormat("en-US");

setInterval(() => {
    const now = new Date();
    const difference = Math.floor((now.getTime() - birthDayDate.getTime()) / 1000);

    timeContainer.innerText = int1NumberFormatter.format(difference);
}, 1000);