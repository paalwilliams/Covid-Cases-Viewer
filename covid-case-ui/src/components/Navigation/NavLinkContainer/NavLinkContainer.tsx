import NavLink from "../NavLink/NavLink";

const NavLinkContainer = ({
  pages,
}: {
  pages: { label: string; path: string }[];
}) => {
  return (
    <>
      {pages.map(({ label, path }) => {
        return <NavLink to={path} label={label} key={label} />;
      })}
    </>
  );
};

export default NavLinkContainer;
