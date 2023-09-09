import AnchorLink from "react-anchor-link-smooth-scroll";


const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "");

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-teal-600" : ""}
        transition duration-500 hover:text-teal-600
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;