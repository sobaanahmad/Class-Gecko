import Link from "next/link";

const navLinks = [
  { name: "Login", href: "/login" },
  { name: "Sign Up", href: "/signup" },
  { name: "Forgot Password", href: "/forgotpassword" },
  { name: "Reset Password", href: "/forgotpassword" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {navLinks.map((link) => {
        return <Link href={link.name} key={link.name}></Link>;
      })}
      {children}
    </div>
  );
}
