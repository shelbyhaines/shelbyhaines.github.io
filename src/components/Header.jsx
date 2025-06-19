import NavBar from "./NavBar";

function Header() {
  return (
    <header style={{ backgroundColor: '#6366f1' }} className="text-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center">
        <h1 className="text-2xl font-semibold">
          Personal Portfolio  |  Shelby Haines
        </h1>
        <NavBar />
      </div>
    </header>
  );
}

export default Header;