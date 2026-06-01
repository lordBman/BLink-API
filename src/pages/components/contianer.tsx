import { Html } from '@elysia/html'

const Contianer = (props: { tilte: string, headerStyles?: string[], headerScripts?: string[], children: JSX.Element | JSX.Element[] }) =>{
    return (
        <html lang="en">
            <head>
                <title>{props.tilte}</title>
                {props.headerStyles?.map((style) => (
                    <link rel="stylesheet" href={`/assets/css/${style}`} />
                ))}
                {props.headerScripts?.map((script) => (
                    <script src={`/assets/js/${script}`} defer />
                ))}
            </head>
            <body style={{ backgroundColor: "#E6E6F2" }}>{props.children}</body>
        </html>
    );
}

export default Contianer;