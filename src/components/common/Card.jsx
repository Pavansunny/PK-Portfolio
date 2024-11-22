export function Card({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-2xl shadow-soft hover-card p-6 ${className}`}>
      {children}
    </div>
  );
} 