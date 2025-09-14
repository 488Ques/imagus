import { Link } from "@/components/ui/Link";

export function AppNavBar() {
  const navLinks = [
    {
      content: "My account",
      href: "/account",
    },
    {
      content: "Posts",
      href: "/posts",
    },
    {
      content: "Comments",
      href: "/comments",
    },
    {
      content: "Notes",
      href: "/notes",
    },
    {
      content: "Artists",
      href: "/artists",
    },
    {
      content: "Tags",
      href: "/tags",
    },
    {
      content: "Pools",
      href: "/pools",
    },
  ];

  return (
    <div class="p-4 flex items-center bg-base-100 shadow-sm space-x-4">
      <a href="/" class="text-xl">
        Imagus
      </a>
      <div class="flex items-center space-x-3">
        {navLinks.map(({ href, content }) => (
          <Link href={href}>{content}</Link>
        ))}
      </div>
    </div>
  );
}
