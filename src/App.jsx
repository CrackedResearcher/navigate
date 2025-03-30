import PromptBox from './components/PromptBox';

function App() {
  const handlePromptSubmit = (prompt) => {
    // Here you can add your Playwright logic
    console.log('Received prompt:', prompt);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <PromptBox onSubmit={handlePromptSubmit} />
    </div>
  );
}

export default App;