export default function Footer() {
  return (
    <div className="photofolio-footer">
      <span className="footer-header">
        PhotoFolio<span>.</span>
      </span>
      <span>Copyright © {new Date().getFullYear()}</span>
    </div>
  );
}
