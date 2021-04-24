import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const LoadingScreen = () => {
  return (
    <div className='flex justify-center items-center justify-items-center'>
      <Loader type='ThreeDots' color='#525252' height={100} width={100} />
    </div>
  );
};

export default LoadingScreen;
