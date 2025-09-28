import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, ArrowRight } from "lucide-react";
import { Exam } from "@/data/exams";

interface ExamCardProps {
  exam: Exam;
  onStartExam: (examId: string) => void;
}

const ExamCard = ({ exam, onStartExam }: ExamCardProps) => {
  return (
    <Card className="exam-card group cursor-pointer h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary" className="mb-2">
            {exam.category}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mr-1" />
            {exam.duration}
          </div>
        </div>
        <CardTitle className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
          {exam.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {exam.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col justify-between pt-0">
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <BookOpen className="w-4 h-4 mr-2" />
          {exam.questions.length} Questions
        </div>
        
        <Button 
          onClick={() => onStartExam(exam.id)}
          className="w-full group-hover:scale-105 transition-transform"
          size="lg"
        >
          Start Exam
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ExamCard;