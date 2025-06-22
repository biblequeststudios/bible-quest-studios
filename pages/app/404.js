import Layout from '../components/Layout'
import QuizCard from '../components/QuizCard'


export default function Custom404() {
  return (
    <Layout>
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-6">Sorry, we couldn't find what you were looking for.</p>
        <a href="/" className="text-blue-600 hover:underline">Go back home</a>
      </div>
    </Layout>
  );
}
