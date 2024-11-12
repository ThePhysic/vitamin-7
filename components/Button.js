// components/Button.js
import clsx from 'clsx';

function Button({ isPrimary }) {
  return (
    <button className={clsx('btn', { 'btn-primary': isPrimary, 'btn-secondary': !isPrimary })}>
      Click me
    </button>
  );
}

export default Button;
