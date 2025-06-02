import './globals.css';

export const metadata = {
  title: 'Calculadora Elegante',
  description: 'Una calculadora moderna',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}