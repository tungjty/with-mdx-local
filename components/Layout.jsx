export default function Layout({ children }) {
  return (
    <div>
      <nav className='text-gray-600 font-bold pb-10'>HOME | ABOUT | CONTACT</nav>
      <main>{children}</main>
      <footer className='text-gray-600 font-bold pt-10'>FOOTER</footer>
    </div>
  );
}
