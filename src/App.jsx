// src/App.js
import './App.css'; // Keep any global CSS you might have
import GoogleGeminiEffectDemo from './components/GoogleGeminiEffectDemo'; // Your hero component
import AboutMe from './components/AboutMe';


function App() {
  return (
    // The main container for your entire application.
    // `relative` is important if you use `absolute` positioning within your content components later.
    // `bg-black` ensures a dark base color for the entire page.
    <div className="relative min-h-screen bg-black text-white">

      {/* Your Hero Component will now handle the animated background */}
      <GoogleGeminiEffectDemo />
      <AboutMe />


     
    </div>
  );
}

export default App;