(function(){
    'use strict';
  

    setTimeout(() => {
      document.querySelector('body').classList.remove('body');
      document.querySelector('.loader').classList.add('hide');
      document.querySelector('main').classList.remove('main-content');
      document.querySelector('#menu_icon').classList.remove('hide');
    }, 4000)
    class Menu {
      constructor(settings) {
        this.menuNode = settings.menuNode;
      }
      
      toggleMenuState(className) {      
        if (typeof className !== 'string' || className.length === 0) {
          return console.log('you did not give the class for toggleState function');
        } 
        return  this.menuNode.classList.toggle(className);
      }
    }
  
    const jsMenuNode = document.querySelector('.menu');
    const demoMenu = new Menu ({
      menuNode: jsMenuNode
    });
    
    function callMenuToggle(event) {
      demoMenu.toggleMenuState('menu_activated');
    }
    
    jsMenuNode.querySelector('.menu__hamburger').addEventListener('click', callMenuToggle);

   
  })();


  


