interface LogoProps {
    width?: number;
    height?: number;
};

const Logo = ({
    width = 223,
    height = 40
}: LogoProps) => (
    <div>
        <img src={'/metaverse-logo.svg'} width={width} height={height} />
    </div>
)

export default Logo;