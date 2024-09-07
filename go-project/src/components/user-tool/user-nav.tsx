export default function UserNav() {
    return <div className="absolute top-0 right-0">
    <ul className="flex gap-6 justify-end pt-5 pr-7">
        <li>
            <a href="/" className="font-medium text-lg text-white cursor-pointer">The app</a>
        </li>
        <li>
            <a href="/" className="font-medium text-lg text-white cursor-pointer">Login</a>
        </li>
        <li>
            <a href="/" className="font-medium text-lg text-white cursor-pointer">Communities</a>
        </li>
        <li>
            <a href="/" className="font-medium text-lg text-white cursor-pointer">About</a>
        </li>
    </ul>
    </div>
}