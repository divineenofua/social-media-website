// SIDE BAR
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES
const messageNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search'); 
 

//  THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

const fontSizes = document.querySelectorAll('.choose-size span')
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span'); 
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

const backGround = document.querySelectorAll('.choose-bg div'); 




// ================ SIDE BAR=======================
// REMOVE ACTIVE CLASS FROM ALL MENU ITEMS
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id == 'notifications'){
            document.querySelector('.notifications-popup').
            style.display ='block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        } else{
            document.querySelector('.notifications-popup').
            style.display ='none';
        }
    })
});
// ====================MESSAGES===================
// searches chat
const searchMessage = () =>  {

    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        } else{
            chat.style.display = 'none';
        }
    })
}


// search chat
messageSearch.addEventListener('keyup', searchMessage);




// ==highlight message card when message menu is clicked
messageNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 16px var(--primary-color)';
    messageNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
});


//  THEME/DISPLAY CUSTOMIZATION


// opens modal
const openThemeModal = () => {
      themeModal.style.display = 'grid';
}

theme.addEventListener('click', openThemeModal);

// closing modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

themeModal.addEventListener('click', closeThemeModal);





// ==========================FONTS============
//===========remove active class from spans or font size selectors===================================
const removeSizeSelector = () => {
    fontSizes.forEach(size => {   
        size.classList.remove('active');
    })
} 


fontSizes.forEach(size => {
  size.addEventListener('click', () => { 
    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');

    if(size.classList.contains('font-size-1')){
        fontSize = '10px';
        root.style.setProperty('--sticky-top-left', '86.4px'); 
        root.style.setProperty('--sticky-top-right', '86.4px'); 
    } else if(size.classList.contains('font-size-2')){
        fontSize = '12px';
        root.style.setProperty('--sticky-top-left', '86.4px'); 
        root.style.setProperty('--sticky-top-right', '-112px');
    } else if(size.classList.contains('font-size-3')){
        fontSize = '13.7px';
        root.style.setProperty('--sticky-top-left', '40px'); 
        root.style.setProperty('--sticky-top-right', '-150px');
   } else if(size.classList.contains('font-size-4')){
        fontSize = '15px';
        root.style.setProperty('--sticky-top-left', '-8px'); 
        root.style.setProperty('--sticky-top-right', '-400px');
   } else if(size.classList.contains('font-size-5')){
        fontSize = '17px';
        root.style.setProperty('--sticky-top-left', '0px'); 
        root.style.setProperty('--sticky-top-right', '0px');
  }

  const allElementsInDom= document.querySelectorAll("html *")

  allElementsInDom.forEach(element  => {
      element.style.fontSize = fontSize
  })
})

})


// remove active class
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// change primary color
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        // remove active class
        changeActiveColorClass(); 


        if(color.classList.contains('color-1')){
            primaryHue = 252;
        } else if(color.classList.contains('color-2')){
            primaryHue = 52;
        } else if(color.classList.contains('color-3')){
            primaryHue = 352;
        } else if(color.classList.contains('color-4')){
            primaryHue = 152;
        } else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})







const removeBackGroundSelector = () => {
    backGround.forEach(back => {   
        back.classList.remove('active');
    })
} 



backGround.forEach(back => {
    back.addEventListener('click', () => { 
      removeBackGroundSelector();
      let backGroundMode;
      back.classList.toggle('active');

        if(back.classList.contains('bg-1')){
        window.location.reload();
      } else if(back.classList.contains('bg-2')){
        root.style.setProperty('--dark-text', 'white');
        root.style.setProperty('--light-color-lightness', '25%');
        root.style.setProperty('--white-color-lightness', '20%');
        root.style.setProperty('--dark-color-lightness', '15%');
        style.color = 'white';
      } else if(back.classList.contains('bg-3')){
        root.style.setProperty('--dark-text', 'white');
        root.style.setProperty('--light-color-lightness', '15%');
        root.style.setProperty('--white-color-lightness', '10%');
        root.style.setProperty('--dark-color-lightness', '0%');
     } 
  
    const allElementsInDom= document.querySelectorAll("html *")
  
    allElementsInDom.forEach(element  => {
        element.style.backGround = backGroundMode
    })

  })
  
  })







//   ALTERNATE METHOD FOR CHANGING BACKGROUND COLOR


// // theme BACKGROUND values
// let lightColorLightness;
// let whiteColorLightness;
// let darkColorLightness;

// // change background colors
//  const changeBG = () => {
//     root.style.setProperty('--light-color-lightness', lightColorLightness);
//     root.style.setProperty('--white-color-lightness', whiteColorLightness);
//     root.style.setProperty('--dark-color-lightness', darkColorLightness);
 

// }
 

// // change background colors
// Bg1.addEventListener('click', () => {

//     lightColorLightness = '95%';
//     whiteColorLightness = '20%';
//     darkColorLightness = '15%';

// // add active class
    

//     Bg1.classList.add('active');
//     // remove active class from others 
//     Bg2.classList.remove('active');
//     Bg3.classList.remove('active');
// // remove customized changes from local storage
//     window.location.reload();
// });


// Bg2.addEventListener('click', () => {
//     lightColorLightness = '10%';
//     whiteColorLightness = '20%';
//     darkColorLightness = '15%';
//     // add active class
//     Bg2.classList.add('active');
//     // remove active classes from the others
//     Bg1.classList.remove('active');
//     Bg3.classList.remove('active');
//     changeBG();
// });


// Bg3.addEventListener('click', () => {
//     lightColorLightness = '15%';
//     whiteColorLightness = '10%';
//     darkColorLightness = '0%';

//     // // add active class
//     // Bg3.classList.add('active');
//     //  remove active classes from the others
//     Bg1.classList.remove('active');
//     Bg2.classList.remove('active');
//     changeBG();
// });

