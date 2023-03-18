import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reload-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit{
  title = 'auto-reload';
  counter=0;

  LoadReload()
  {
    // debugger;
    // window.location.reload();
    // this.counter++;
    console.log("Page not yet Reloaded !!");
    if (window.localStorage) {
      if (!localStorage.getItem('reload'))
       {
          localStorage['reload'] = true;
          window.location.reload();
       } else 
       {
          localStorage.removeItem('reload');
       }
  }
    console.log("Page Reloaded !!");
  }

  LoadData()
  {
    debugger; 
    console.log(this.counter);
  }

  ngOnInit(): void {
    this.LoadReload();
    this.LoadData();
    //window.stop();
  }
  

}
