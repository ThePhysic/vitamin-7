// components/MyComponent.js
import { usePathname } from 'next/navigation';

function MyComponent() {
  const pathname = usePathname();

  return (
    <div>
      <p>Current pathname: {pathname}</p>
      {pathname === '/' && <p>You are on the homepage!</p>}
    </div>
  );
}

export default MyComponent;
