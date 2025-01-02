import { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);
  const handleScroll = () => {
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight
    ) {
      fetchMemes();
    }
  };

  useEffect(() => {
    fetchMemes();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchMemes = async () => {
    setShowShimmer(true);
    const result = await fetch("https://meme-api.com/gimme/15");
    const data = await result.json();

    setShowShimmer(false);
    setMemes((memes) => [...memes, ...data.memes]);
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {memes.map((meme, i) => (
        <MemeCard key={i} data={meme} />
      ))}
      {showShimmer && <Shimmer />}
    </div>
  );
};

export default Body;
