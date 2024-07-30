const Header = () => {
  return (
    <div className="z-10 w-full h-20 bg-gray-800">
      <img
        className="w-40 p-4 m-2 rounded-3xl bg-gradient-to-b from-black absolute"
        src="https://w7.pngwing.com/pngs/198/254/png-transparent-replay-hd-logo.png"
        alt="logo"
      />
      <div>
        <div className="bg-slate-200">
          <p>Abhishek Mehta</p>
        </div>
        <button>Sign Out</button>
      </div>
    </div>
  );
};

export default Header;
