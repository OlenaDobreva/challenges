export default function Links({ href, Children }) {
  return (
    <a className="navigation__link" href={href}>
      {Children}
    </a>
  );
}
