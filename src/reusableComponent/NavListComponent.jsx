function NavListComponent({ icon, label, value }) {
  return (
    <li className="mb-2">
      <a
        href="#"
        className="flex items-center text-gray-400 hover:text-[#ffd37d]"
      >
        {icon}
        {label}
        {value && (
          <span className="bg-red-500 text-white w-5 h-5 text-[12px]  rounded-full">
            {value}
          </span>
        )}
      </a>
    </li>
  );
}

export default NavListComponent;
