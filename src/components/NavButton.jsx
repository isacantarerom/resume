export default function NavButton ({label, onClick, isActive}) {
    return (
        <button
            onClick={onClick}
            className = {`nav-link-btn ${isActive ? "active" : ""}`}
        >
            {label}
        </button>
    );
}