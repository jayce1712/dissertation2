import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  changeColoration();

  constructor() {}


  ngOnInit() {
    function changeColoration() {
      const x = 6000;
      let i = 1;
      for (i = 1 ; i < 6 ; i++){
        setTimeout(function() {document.getElementsByClassName('brand')[0].style.backgroundImage
          = 'var(--brandgradient1)';
                               document.getElementsByClassName('navbar')[0].style.background
            = 'var(--navbargradient1)';}, x * i);
        setTimeout(function(){ document.getElementsByClassName('brand')[0].style.backgroundImage
          = 'var(--brandgradient2)';
          document.getElementsByClassName('navbar')[0].style.background
            = 'var(--navbargradient2)';},2*x*i);
        setTimeout(function(){document.getElementsByClassName('brand')[0].style.backgroundImage
          = "var(--brandgradient3)";
          document.getElementsByClassName('navbar')[0].style.background
            = "var(--navbargradient3)";},3*x*i);

        setTimeout(function(){document.getElementsByClassName('navbar')[0].style.background
          = "var(--navbargradient4)";},4*x*i);
        setTimeout(function(){document.getElementsByClassName('navbar')[0].style.background
          = "linear-gradient(to right, aquamarine , darkblue)";},5*x*i);
        setTimeout(function(){document.getElementsByClassName('brand')[0].style.backgroundImage
          = "linear-gradient(\n" +
          "        45deg,\n" +
          "        #CA4246 25%, \n" +
          "        #E16541 16.666%, \n" +
          "        #E16541 33.333%, \n" +
          "        #F18F43 33.333%, \n" +
          "        #F18F43 50%, \n" +
          "        #8B9862 50%, \n" +
          "        #8B9862 66.666%, \n" +
          "        aquamarine 66.666%, \n" +
          "        #476098 83.333%, \n" +
          "        #A7489B 100%);";},5*x*i);
      }
    }

    let timesclicked = 0;
    function displayModal() {
      timesclicked++;
      const moduli = timesclicked % 2;
      if ( moduli === 0) { document.getElementsByClassName('modal')[0].style.display
        = 'none' ;
      return; }
      if (document.getElementsByClassName('modal')[0].style.display
        = "none")
      {document.getElementsByClassName('modal')[0].style.display
        = "grid";}
      console.log(timesclicked);}
    function displayMessage(){

    }
  }
  }

}
