class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  startTimer() {
    const clock = document.querySelector(this.selector);
    const endDate = this.targetDate;

    const refs = {
      days: clock.querySelector('span[data-value="days"]'),
      hours: clock.querySelector('span[data-value="hours"]'),
      mins: clock.querySelector('span[data-value="mins"]'),
      secs: clock.querySelector('span[data-value="secs"]'),
    };

    const timer = {
      start() {
        setInterval(() => {
          const startDate = new Date();
          const deltaTime = startDate - endDate;

          updateClockFase(deltaTime);
        }, 1000);
      },
    };

    function updateClockFase(time) {
      const days = pad(Math.abs(Math.floor(time / (1000 * 60 * 60 * 24))));
      const hours = pad(
        Math.floor(Math.abs((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
      );
      const mins = pad(
        Math.abs(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)))
      );
      const secs = pad(Math.abs(Math.floor((time % (1000 * 60)) / 1000)));

      refs.days.textContent = `${days}`;
      refs.hours.textContent = `${hours}`;
      refs.mins.textContent = `${mins}`;
      refs.secs.textContent = `${secs}`;
    }

    function pad(value) {
      return String(value).padStart(2, 0);
    }

    timer.start();
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2021"),
});

timer.startTimer();
