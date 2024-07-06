import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "./ui/navigation-menu";

const data = [
	{
		id: 1,
		title: "About Us",
		link: "https://ejik.vercel.app/about-us",
		isDropdown: false,
	},
	{
		id: 2,
		title: "Project",
		link: "",
		isDropdown: true,
	},
	{
		id: 3,
		title: "News & Events",
		link: "",
		isDropdown: true,
	},
	{
		id: 4,
		title: "Careers",
		link: "https://ejik.vercel.app/careers",
		isDropdown: false,
	},
	{
		id: 5,
		title: "Contact Us",
		link: "https://ejik.vercel.app/contact-us",
		isDropdown: false,
	},
];

const Nav = () => {
	return (
		<NavigationMenu className="text-black">
			<NavigationMenuList className="flex flex-col items-center gap-8 lg:flex-row">
				{data.map((item) =>
					item.isDropdown ? (
						<NavigationMenuItem key={item.id}>
							<NavigationMenuTrigger className="h-fit bg-transparent p-2 text-5xl font-normal hover:bg-accent lg:text-xs">
								{item.title}
							</NavigationMenuTrigger>
							<NavigationMenuContent></NavigationMenuContent>
						</NavigationMenuItem>
					) : (
						<NavigationMenuItem key={item.id}>
							<a
								className="inline-block w-full rounded-md p-2 text-5xl hover:bg-accent hover:text-black lg:text-xs"
								href={item.link}
								target="_blank"
								rel="noreferrer"
							>
								{item.title}
							</a>
						</NavigationMenuItem>
					),
				)}
			</NavigationMenuList>
		</NavigationMenu>
	);
};
export default Nav;
