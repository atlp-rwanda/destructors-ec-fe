import { Link, useLocation } from "react-router-dom";

const subNavigation = [
  { name: "Account", href: "/profile/update-profile" },
  { name: "Security", href: "/profile/update-password" },
  { name: "Address", href: "/profile/update-address" },
];

function classNames (...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProfileMenu () {
  const location = useLocation();

  return (
    <>
      <aside className="py-6 lg:col-span-3  font-poppins">
        <nav className="space-y-1">
          {subNavigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={classNames(
                location.pathname === item.href
                  ? "bg-white"
                  : "border-transparent font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                "group font-bold  px-4 py-2 flex items-center text-sm",
              )}
            >
              <span className="truncate">{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
