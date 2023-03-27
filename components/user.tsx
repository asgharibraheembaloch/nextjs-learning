export default function User({ user }:any) {
  return (
    <>
      <li>
        {user.name} {user.email}
      </li>
    </>
  );
}
