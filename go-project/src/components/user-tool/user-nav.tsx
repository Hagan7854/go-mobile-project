import { Link } from "react-router-dom";

export default function UserNav() {
  return (
    <div className="absolute top-0 right-0">
      <ul className="flex gap-6 justify-end pt-5 pr-7 2xl:pt-9 2xl:pr-11">
        <li>
          <a
            href="/"
            className="font-medium text-lg text-white cursor-pointer 2xl:text-2xl"
          >
            The app
          </a>
        </li>
        <li>
          <Link
            to="/login"
            className="font-medium text-lg text-white cursor-pointer 2xl:text-2xl"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            className="font-medium text-lg text-white cursor-pointer 2xl:text-2xl"
          >
            Communities
          </Link>
        </li>
        <li>
          <a
            href="/"
            className="font-medium text-lg text-white cursor-pointer 2xl:text-2xl"
          >
            About
          </a>
        </li>
      </ul>
    </div>
  );
}
