import { useTheme } from 'hooks/useTheme';
import { ThemeToggleContainer, ThemeToggleIcon } from './ThemeToggle.styled';
// import { PiToggleLeftFill, PiToggleRightFill } from "react-icons/pi";
import { MdOutlineLightMode, MdOutlineNightlight,  } from 'react-icons/md';

const ThemeToggle = () => {
  const [ theme, setTheme ] = useTheme();


  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    // console.log(theme);

  };


  return (
    <>
      <ThemeToggleContainer onClick={toggleTheme}>
      <ThemeToggleIcon>
          {theme === 'light' ? <MdOutlineNightlight size={32} color='#000' /> : <MdOutlineLightMode size={32} color='white'/>}
        </ThemeToggleIcon>
        {/* <span>{theme}</span> */}
        {/* <ThemeToggleIcon>
          {theme === 'light' ? <PiToggleLeftFill size={36} color='#000' /> : <PiToggleRightFill size={36} color='white'/>}
        </ThemeToggleIcon> */}
        
      </ThemeToggleContainer>
    </>
  );
};

export default ThemeToggle;
