export default function Header() {
  return (
    <div className="photofolio-header">
      <div className="photofolio-header-container">
        <ul>
          <li>Home</li>
          <li>Portfolio</li>
          <li className="header-title">
            PhotoFolio<span className="photofolio-special">.</span>
          </li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="photofolio-mobile-view" style={{ display: 'none' }}></div>
    </div>
  );
}
