import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import HalideTopoHero from './components/ui/halide-topo-hero';
import { useState } from 'react';

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = () => {
    setIntroComplete(true);
  };

  return (
    <>
      {!introComplete && (
        <HalideTopoHero onComplete={handleIntroComplete} />
      )}
      {introComplete && (
        <RouterProvider router={router} />
      )}
    </>
  );
}
