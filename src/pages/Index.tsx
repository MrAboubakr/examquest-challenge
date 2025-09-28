import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Clock, TrendingUp } from "lucide-react";
import ExamCard from "@/components/ExamCard";
import QuizView from "@/components/QuizView";
import { exams } from "@/data/exams";

const Index = () => {
  const [selectedExam, setSelectedExam] = useState<string | null>(null);

  const handleStartExam = (examId: string) => {
    setSelectedExam(examId);
  };

  const handleBackToHome = () => {
    setSelectedExam(null);
  };

  if (selectedExam) {
    const exam = exams.find(e => e.id === selectedExam);
    if (exam) {
      return <QuizView exam={exam} onBackToHome={handleBackToHome} />;
    }
  }

  const categories = [...new Set(exams.map(exam => exam.category))];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Test Your Knowledge
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Online Exam Platform
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Challenge yourself with comprehensive exams across various topics. 
            Test your skills and track your progress with our interactive quiz platform.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border rounded-lg px-4 py-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="font-medium">{exams.length} Exams Available</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border rounded-lg px-4 py-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-medium">Multiple Categories</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border rounded-lg px-4 py-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-medium">Timed Challenges</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Badge key={category} variant="secondary" className="px-4 py-2 text-sm">
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Exams Grid */}
      <section className="py-8 px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Exam</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exams.map((exam) => (
              <ExamCard
                key={exam.id}
                exam={exam}
                onStartExam={handleStartExam}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
