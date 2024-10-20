import '../styles/styles.scss'

export const metadata = {
  title: 'Next Boilerplate + Design Tokens + datoCMS',
  description: 'By Alexis Mora (Jopzik).',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
