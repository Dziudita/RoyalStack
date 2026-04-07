export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <style>{`
          * {
            box-sizing: border-box;
          }

          html, body {
            margin: 0;
            padding: 0;
            background: #040405;
          }
        `}</style>

        {children}
      </body>
    </html>
  );
}
