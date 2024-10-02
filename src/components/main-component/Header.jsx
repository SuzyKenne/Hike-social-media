function Header() {
    return (
      <div className="">
        <h1 className="text-2xl font-bold mb-4">Upcoming Hikes</h1>
        <p className="flex items-center">
          Sort by: Most Recent
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512" 
            className="w-4 h-4 ml-2"  
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 
              0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 
              338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 
              0 45.3l192 192z"
            />
          </svg>
        </p>
      </div>
    )
  }
  
  export default Header;
  