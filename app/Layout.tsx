import '../styles/globals.css'
import ScrollProvider from './ScrollProvider';

export default function RootLayout({ children }: { children: React.ReactNode; }) {
    return (
        <html lang="en">
            <body>
                <ScrollProvider>{ children }</ScrollProvider>
            </body>
        </html>
    );
}