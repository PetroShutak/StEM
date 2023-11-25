import { useTheme } from 'hooks/useTheme';
import { ThemeToggleContainer, ThemeToggleIcon } from './ThemeToggle.styled';
import { PiToggleLeftFill, PiToggleRightFill } from "react-icons/pi";

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
          {theme === 'light' ? <PiToggleLeftFill size={36} color='#000' /> : <PiToggleRightFill size={36} color='white'/>}
        </ThemeToggleIcon>
        
      </ThemeToggleContainer>
    </>
  );
};

export default ThemeToggle;
