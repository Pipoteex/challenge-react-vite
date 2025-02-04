interface HeaderProps {
    contentValue: string;
}

const Header = ({ contentValue }: HeaderProps) => {
    console.log("Render header component");
    return <header>{contentValue}</header>;
};

export default Header;
