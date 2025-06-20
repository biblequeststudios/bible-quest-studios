import Layout from "../components/Layout";
import QuizCard from "../components/QuizCard";

export default function Home() {
  return (
    <Layout>
      <h2 className="text-xl font-bold mb-6">Welcome to Bible Quest!</h2>
      <QuizCard
        question="Who led the Israelites out of Egypt?"
        answers={["Abraham", "Moses", "David", "Paul"]}
        correct="Moses"
      />
    </Layout>
  );
}
