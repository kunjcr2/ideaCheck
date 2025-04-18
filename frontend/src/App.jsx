function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-4 border-b border-gray-700">
        <h1 className="text-3xl font-bold">Project Dashboard</h1>
      </header>
      <main className="p-6">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Welcome</h2>
          <p className="text-gray-300">This is a simple black-themed UI for the project. Feel free to expand upon it.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Features</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Dark theme for better focus</li>
            <li>Responsive layout</li>
            <li>Minimalistic design</li>
          </ul>
        </section>
      </main>
      <footer className="p-4 border-t border-gray-700 text-center text-gray-500">
        <p>&copy; 2025 idk_something_really_cool</p>
      </footer>
    </div>
  );
}

export default App;
