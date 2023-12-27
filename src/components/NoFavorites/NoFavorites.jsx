import { useNavigate } from 'react-router-dom';
import noResultsFound from '../../images/No_results_found.jpg';
import { Button, Container, Text } from './NoFavorites.styled';
import { useSelector } from 'react-redux';
import { selectLoading } from '../../redux/products/selectors';
import Loader from 'components/Loader/Loader';

const NoFavorites = () => {
  const navigate = useNavigate();
  const loading = useSelector(selectLoading);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Text>
            Тут поки нічого немає... <br />
            Переходь в каталог і додай товар.
          </Text>
          <img
            src={noResultsFound}
            alt="No results found"
            width="400"
            height="400"
            loading="lazy"
          />
          <Button onClick={() => navigate('/catalog')}>Відкрити каталог</Button>
        </Container>
      )}
    </>
  );
};

export default NoFavorites;
