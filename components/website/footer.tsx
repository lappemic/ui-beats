import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex justify-center text-sm items-center transition-colors text-foreground/60 px-2 md:px-7 h-24 max-w-screen-2xl">
      Crafted with love by&nbsp;
      <Link
        className="hover:text-foreground/80 underline"
        target="_blank"
        href="https://nikhils.ca"
      >
        nikhils4
      </Link>
      , for the web!
    </footer>
  );
};
