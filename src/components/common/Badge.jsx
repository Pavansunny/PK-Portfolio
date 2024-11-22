export function Badge({ children, color = 'blue' }) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                     bg-${color}-100 text-${color}-800`}>
      {children}
    </span>
  );
} 