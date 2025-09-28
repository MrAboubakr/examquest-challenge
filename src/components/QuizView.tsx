import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Home, CheckCircle } from "lucide-react";
import { Exam, Question } from "@/data/arabic-exams";

interface QuizViewProps {
  exam: Exam;
  onBackToHome: () => void;
}

const QuizView = ({ exam, onBackToHome }: QuizViewProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentQuestion + 1) / exam.questions.length) * 100;
  const question = exam.questions[currentQuestion];

  const handleAnswerSelect = (optionIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestion < exam.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    exam.questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / exam.questions.length) * 100);

    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-2xl mx-auto">
          <Card className="question-card">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-success" />
              </div>
              <CardTitle className="text-2xl font-bold">انتهى الامتحان!</CardTitle>
              <CardDescription>لقد أنهيت امتحان {exam.title}</CardDescription>
            </CardHeader>
            
            <CardContent className="text-center space-y-6">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">{percentage}%</div>
                <div className="text-muted-foreground">
                  {score} من أصل {exam.questions.length} أسئلة صحيحة
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button onClick={onBackToHome} variant="outline" size="lg">
                  <Home className="w-4 h-4 ml-2" />
                  العودة للامتحانات
                </Button>
                <Button 
                  onClick={() => {
                    setCurrentQuestion(0);
                    setSelectedAnswers({});
                    setShowResults(false);
                  }}
                  size="lg"
                >
                  إعادة الامتحان
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button 
            variant="ghost" 
            onClick={onBackToHome}
            className="flex items-center gap-2"
          >
            <ArrowRight className="w-4 h-4" />
            العودة للرئيسية
          </Button>
          
          <div className="text-sm text-muted-foreground font-medium">
            السؤال {currentQuestion + 1} من {exam.questions.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="question-card mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-semibold leading-relaxed text-right">
              {question.question}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-3">
            {question.options.map((option, index) => (
              <Button
                key={index}
                variant={selectedAnswers[currentQuestion] === index ? "default" : "outline"}
                className="option-button w-full text-right justify-start h-auto p-4 text-wrap"
                onClick={() => handleAnswerSelect(index)}
              >
                <span className="text-right flex-1">
                  {option}
                </span>
                <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center ml-3 flex-shrink-0">
                  {String.fromCharCode(65 + index)}
                </span>
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button 
            onClick={handleNext}
            disabled={selectedAnswers[currentQuestion] === undefined}
            size="lg"
          >
            {currentQuestion === exam.questions.length - 1 ? "إنهاء الامتحان" : "التالي"}
            <ArrowLeft className="w-4 h-4 mr-2" />
          </Button>

          <Button 
            variant="outline" 
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            size="lg"
          >
            <ArrowRight className="w-4 h-4 ml-2" />
            السابق
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizView;