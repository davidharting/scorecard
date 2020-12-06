import { useRouter } from "next/router";

interface ShowScorecardProps {}

const ShowScorecard: React.FC<ShowScorecardProps> = () => {
  const router = useRouter();
  return <h1>Scorecard {router.query.id}</h1>;
};

export default ShowScorecard;
