interface FooterProps {
    contentValue: string;
}

const Footer = ({ contentValue }: FooterProps) => {
    console.log("Render footer component");
    return <footer>{contentValue}</footer>;
};

export default Footer;
