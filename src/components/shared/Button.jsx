export default function Button({ variant = 'primary', children, ...props }) {
  const styles = {
    primary: 'bg-[#E07A5F] hover:bg-[#C65D45] text-white',
    secondary: 'border-2 border-[#81B29A] text-[#81B29A] hover:bg-[#81B29A] hover:text-white'
  };

  return (
    <button 
      className={`px-8 py-4 rounded-lg transition-all duration-300 ${styles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
} 