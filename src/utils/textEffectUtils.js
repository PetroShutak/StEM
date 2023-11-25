export const startTextEffect = () => {
    const spans = document.querySelectorAll('.continue');
    let index = 0;
  
    const changeColor = () => {
      spans.forEach((span, idx) => {
        if (idx === index) {
          span.style.color = 'orange';
        } else {
          span.style.color = 'black';
        }
      });
  
      index = (index + 1) % spans.length;
    };
  
    const interval = setInterval(changeColor, 500);
  
    return () => clearInterval(interval);
  };
  