import '@styles/globals.css';

export const metadata = {
  title: 'Amazona',
  description: 'Ecommerce Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
