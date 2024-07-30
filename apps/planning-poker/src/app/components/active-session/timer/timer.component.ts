import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'planning-poker-app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent {
  @Output() timerFinish = new EventEmitter<string>();
  seconds = 60;
  timer: any;
  running = false;
  showControlPanel = false;

  // startST(): void {
  //   if (!this.running) {
  //     this.running = true;
  //     this.countdown();
  //   }
  // }
  
  // countdown(): void {
  //   this.seconds--;
  //   if (this.seconds > 0) {
  //     this.timer = setTimeout(() => {
  //       this.countdown();
  //     }, 1000);
  //   } else {
  //     this.running = false;
  //   }
  // }
  
  start(): void {
    if (!this.running) {
      this.timer = setInterval(() => {
        this.seconds--;
        if (this.seconds == 0) {
          clearInterval(this.timer);
          this.timerFinish.emit('finished');
        }
      }, 1000);
      console.log(typeof(this.timer))
      this.running = true;
      this.timerFinish.emit('started');
    }
  }
  pause(): void {
    if (this.running) {
      clearInterval(this.timer);
    }
    this.running = !this.running;
  }
  restart(): void {
    clearInterval(this.timer);
    this.seconds = 60;
    this.running = false;
    this.start();
  }
  cancel(): void {
    clearInterval(this.timer);
    this.seconds = 60;
    this.running = false;
  }
  increase(): void {
    this.seconds += 60;
  }
  decrease(): void {
    if (this.seconds <= 60) {
      alert("Timer can't be decrease further.");
    } else {
      this.seconds -= 60;
    }
  }

  toggleControlPanel(): void {
    this.showControlPanel = !this.showControlPanel;
  }
}
