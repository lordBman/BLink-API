import { Html } from '@elysia/html'

const Contianer = (props: { tilte: string, headerStyles?: string[], headerScripts?: string[], children: JSX.Element | JSX.Element[] }) =>{
    return (
        <html lang="en">
            <head>
                <title>{props.tilte}</title>
                {props.headerStyles?.map((style) => (
                    <link rel="stylesheet" href={`/assets/styles/${style}`} />
                ))}
                {props.headerScripts?.map((script) => (
                    <script src={`/assets/scripts/${script}`} defer />
                ))}
            </head>
            <body>{props.children}</body>
        </html>
    );
}

export default Contianer;