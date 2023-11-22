import Header from './components/Header';

const cityMockup: string = 'london';

function App() {
  return (
    <div>
      <Header city={ cityMockup } />
    </div>
  );
}

export default App;
