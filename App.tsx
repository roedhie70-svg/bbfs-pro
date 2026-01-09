
import React from 'react';
import BBFSCalculator from './components/BBFSCalculator';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-8 px-4 bg-[#05070a]">
      {/* Background decoration elements */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-900 via-emerald-500 to-emerald-900 opacity-30"></div>
      
      <main className="w-full max-w-lg">
        <BBFSCalculator />
      </main>

      <footer className="mt-auto py-8 text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} BBFS Permutation Pro
      </footer>
    </div>
  );
};

export default App;
