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
          <img src={noResultsFound} alt="No results found" width="400" />
          <Text>
            Sorry, you have no favorites. <br />
            Go to the catalog and add some products.
          </Text>
          <Button onClick={() => navigate('/catalog')}>See catalog</Button>
        </Container>
      )}
    </>
  );
};

export default NoFavorites;
