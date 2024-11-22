
import './Header.css'; // Import the CSS file

export default function Header() {
  return (
    <header className="header-nav">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#appointments">Appointments</a></li>
          <li><a href="#message">Message</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
      </nav>
    </header>
  );
}
