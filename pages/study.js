import Layout from "../components/Layout";

export default function Study() {
  return (
    <Layout>
      <h2 className="text-xl font-bold mb-6">Study & Devotionals</h2>
      <article className="prose max-w-none">
        <h3>Daily Reflection</h3>
        <p>
          "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future." (Jeremiah 29:11)
        </p>
        <p>
          Spend a few moments reflecting on how God’s promises apply to your life today.
        </p>
      </article>
    </Layout>
  );
}
