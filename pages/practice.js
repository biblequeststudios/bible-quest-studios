import Layout from "../components/Layout";
import QuizCard from "../components/QuizCard";

export default function Practice() {
  return (
    <Layout>
      <h2 className="text-xl font-bold mb-6">Practice Quiz</h2>
      <QuizCard
        question="Which disciple walked on water with Jesus?"
        answers={["Peter", "John", "James", "Thomas"]}
        correct="Peter"
      />
    </Layout>
  );
}
