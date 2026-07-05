export default function Nav() {
  return (
    <nav className="nav" aria-label="Main">
      <div className="nav-inner">
        <a href="#top" className="script" style={{ fontSize: 22, color: "var(--body-c)", textDecoration: "none" }}>
          Victoria <span style={{ color: "var(--scan)" }}>&amp;</span> Sons
        </a>
        <div className="nav-links">
          <a className="nav-anchor" href="#tracker">Check your car</a>
          <a className="nav-anchor" href="#services">What we do</a>
          <a className="nav-anchor" href="#reviews">Reviews</a>
          <a className="nav-anchor" href="#visit">Visit</a>
          <a className="nav-call" href="tel:+19736231414">(973) 623-1414</a>
        </div>
      </div>
    </nav>
  );
}
