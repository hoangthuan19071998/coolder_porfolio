import React from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
function App() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <main>
        <Hero />
        {/* Các section khác sẽ thêm vào đây sau: */}
        {/* <Skills /> */}
        {/* <Projects /> */}
      </main>
    </div>
  );
}

export default App;