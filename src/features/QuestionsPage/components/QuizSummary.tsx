import type { QuizSummaryItem } from "../types";
import { useNavigate } from "react-router-dom";

interface QuizSummaryProps {
  summary: QuizSummaryItem[];
  score: number;
  time: number;
}

export default function QuizSummary({ summary, score, time }: QuizSummaryProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-game text-purple-800 mb-4">Resumen del Quiz</h2>
      <div className="mb-6">
        <p className="text-lg font-bold">Puntaje total: {score}</p>
        <p className="text-lg">Tiempo total: {time} segundos</p>
      </div>

      <div className="space-y-4 mb-6">
        {summary.map((item, index) => (
          <div key={index} className="border-b pb-4">
            <p className="font-bold">{item.question}</p>
            <p className={item.isCorrect ? "text-green-600" : "text-red-600"}>
              {item.isCorrect ? "✓ Correcto" : "✗ Incorrecto"} (Puntos: {item.points})
            </p>
            <p>Tu respuesta: {item.userAnswer}</p>
            {!item.isCorrect && <p>Respuesta correcta: {item.correctAnswer}</p>}
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/home")}
        className="bg-purple-600 hover:bg-purple-700 text-white font-game px-6 py-2 rounded-lg w-full"
      >
        Regresar a Home
      </button>
    </div>
  );
}