export const metadata = { title: "ClinicGlobal Platform" };
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body style={{background:'#0b0b0f', color:'white', margin:0}}>
        {children}
      </body>
    </html>
  );
}
