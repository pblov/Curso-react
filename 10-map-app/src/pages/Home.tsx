import { MapView, ButtonMyLocation, Logo, SearchBar } from 'components';

const HomePage = () => {
  return (
    <div>
      <MapView />
      <SearchBar />
      <ButtonMyLocation />
      <Logo />
    </div>
  );
};

export default HomePage;
