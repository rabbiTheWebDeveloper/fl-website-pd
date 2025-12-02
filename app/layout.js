import Providers from "./providers";
import './globals.css';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        data-new-gr-c-s-check-loaded="14.1260.0"
        data-gr-ext-installed=""
        cz-shortcut-listen="true"
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
