let prevScrollPos = window.pageYOffset;
const header = document.querySelector('.header__bottom');
const headerHeight = header.clientHeight;

const handleScroll = () => {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos < currentScrollPos) {
    // Scrolling down
    header.style.transform = `translateY(-200px)`;

  } else if((prevScrollPos >= currentScrollPos)) {
    // Scrolling up
    header.style.transform = 'translateY(-60px)';
  }
  

  prevScrollPos = currentScrollPos;

  if(currentScrollPos == 0){
    header.style.transform = 'translateY(0px)';
  }
};

window.addEventListener('scroll', handleScroll);




