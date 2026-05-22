import { Html } from '@elysia/html'

const Contianer = (props: { tilte: string, children: JSX.Element }) =>{
    return (
        <html lang="en">
            <head>
                <title>{props.tilte}</title>
            </head>
            <body>{props.children}</body>
        </html>
    );
}

export default Contianer;