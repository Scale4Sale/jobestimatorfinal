export function Button({ onClick, children, className = '', variant }) {
  const base = 'px-4 py-2 rounded font-medium';
  const style = variant === 'outline'
    ? 'border border-gray-400 text-gray-700 bg-white'
    : 'bg-blue-600 text-white';
  return <button onClick={onClick} className={`${base} ${style} ${className}`}>{children}</button>;
}