import { CiPlay1 } from "react-icons/ci";

import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="hidden lg:flex w-2/3 min-h-[60vh]  justify-center items-center">
        <Link href="/game">
          <button className="btn btn-wide btn-lg btn-primary">
            Jouer <CiPlay1 />
          </button>
        </Link>
      </div>
      <div className="lg:hidden flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-center mb-3">
          Ce jeu est jouable uniquement sur pc
        </h2>
      </div>
    </>
  );
};

export default Home;
