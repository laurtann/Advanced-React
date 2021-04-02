import PropTypes from 'prop-types';
import Header from './Header';

export default function Page(props) {
  const { children, cool } = props;
  return (
    <div>
      <Header />
      <h2>I am page component</h2>
      <h3>{cool}</h3>
      {children}
    </div>
  );
}

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
