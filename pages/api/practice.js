export default function handler(req, res) {
  res.status(200).json({
    question: "Which Old Testament character built an ark?",
    answers: ["Moses", "Noah", "Abraham", "Solomon"],
    correct: "Noah"
  });
}
