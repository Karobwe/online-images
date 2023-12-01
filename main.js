// Function to calculate the remaining time until Christmas
function calculateTimeUntilChristmas() {
  // Set the target date to December 24 of the current year
  const targetDate = new Date(new Date().getFullYear(), 11, 24);

  // Get the current date
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = targetDate.getTime() - currentDate.getTime();

  // Calculate the remaining time in seconds
  const remainingSeconds = Math.floor(timeDifference / 1000);

  // Calculate remaining hours, minutes, and seconds within the current day
  const remainingHours = Math.floor((remainingSeconds % (3600 * 24)) / 3600);
  const remainingMinutes = Math.floor((remainingSeconds % 3600) / 60);
  const remainingSecondsOutput = remainingSeconds % 60;

  return {
    days: Math.ceil(timeDifference / (1000 * 60 * 60 * 24)),
    hours: remainingHours,
    minutes: remainingMinutes,
    seconds: remainingSecondsOutput,
  };
}

// Update the countdown elements with the remaining time
function updateCountdown() {
  const countdownDaysElement = document.getElementById("days");
  const countdownHoursElement = document.getElementById("hours");
  const countdownMinutesElement = document.getElementById("minutes");
  const countdownSecondsElement = document.getElementById("seconds");

  const { days, hours, minutes, seconds } = calculateTimeUntilChristmas();

  if (days > 0) {
    countdownDaysElement.textContent = `${days}`;
  } else {
    countdownDaysElement.textContent = "Merry Christmas!";
  }

  countdownHoursElement.textContent = `${hours}`;
  countdownMinutesElement.textContent = `${minutes}`;
  countdownSecondsElement.textContent = `${seconds}`;
}

// Call the updateCountdown function to initialize the countdown
updateCountdown();

// Update the countdown every 1 second
setInterval(updateCountdown, 1000);
