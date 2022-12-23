import Image from "next/image";

export default function Header() {
  return (
    <div className="h-28 flex justify-between items-center bg-red">
      <div className="mr-10 relative top-1">
        <Image src={"/logo.png"} alt="logo" width="120" height="79" />
      </div>
      <div>
        <ul className="flex justify-between items-center">
          <li className="mr-10 text-2xl font-bold">Blog</li>
          <li className="mr-10 text-2xl font-bold">Twitter</li>
          <li className="mr-10 text-2xl font-bold">Github</li>
        </ul>
      </div>
    </div>
  );
}
