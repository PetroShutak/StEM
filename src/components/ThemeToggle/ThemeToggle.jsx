import { useTheme } from 'hooks/useTheme';
import { ThemeToggleContainer, ThemeToggleIcon } from './ThemeToggle.styled';
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const ThemeToggle = () => {
  const [ theme, setTheme ] = useTheme();


  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    console.log(theme);
  };



  return (
    <>
      <ThemeToggleContainer onClick={toggleTheme}>
        
        <ThemeToggleIcon>
          {theme === 'light' ? <FaToggleOff size={32} color='black' /> : <FaToggleOn size={32} color='white'/>}
        </ThemeToggleIcon>
        
      </ThemeToggleContainer>
    </>
  );
};

export default ThemeToggle;
