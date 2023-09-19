import { CiPlay1 } from "react-icons/ci";

import Link from "next/link";

const Home = () => {
  return (
    <div className="w-2/3 min-h-[60vh] flex justify-center items-center bg-black">
      <Link href="/game">
        <button className="btn btn-wide btn-lg btn-primary">
          Jouer <CiPlay1 />
        </button>
      </Link>
    </div>
  );
};

export default Home;
