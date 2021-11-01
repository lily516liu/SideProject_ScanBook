import './App.css';

function App() {
  return (
    <div className="py-6">
      <div className="p-6 max-w-sm mx-auto bg-yellow-100 rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0"></div>
        <div>
          <div className="text-xl font-medium text-blue-light lg:text-blue-dark">
            ChitChat
          </div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
