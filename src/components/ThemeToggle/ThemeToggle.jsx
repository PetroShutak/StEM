import { useTheme } from 'hooks/useTheme';
import { ThemeToggleContainer, ThemeToggleIcon } from './ThemeToggle.styled';
import { MdOutlineLightMode, MdOutlineNightlight,  } from 'react-icons/md';

const ThemeToggle = () => {
  const [ theme, setTheme ] = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };


  return (
    <>
      <ThemeToggleContainer onClick={toggleTheme}>
      <ThemeToggleIcon>
          {theme === 'light' ? <MdOutlineNightlight size={32} color='#000' /> : <MdOutlineLightMode size={32} color='white'/>}
        </ThemeToggleIcon>        
      </ThemeToggleContainer>
    </>
  );
};

export default ThemeToggle;
