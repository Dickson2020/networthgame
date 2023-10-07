import { BlockChainIcon } from "../../interface/icons/blockChain";
import { DevToLogo } from "../../interface/icons/dev-to";

export default function Header() {
  return (
    <ul className="flex items-center justify-between w-full p-4">
      <li>
        <a href="/" className="w-full">
          <BlockChainIcon className="w-12 md:w-14" />
        </a>
      </li>
      <li>
        <a
          href="/https://dev.to/davidadeola"
          target="_blank"
          className="w-full"
        >
          <DevToLogo className="w-12 md:w-14" />
        </a>
      </li>
    </ul>
  );
}
