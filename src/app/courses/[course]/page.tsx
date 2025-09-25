import { Separators } from "@/types/enums";
import CourseDetailsPage from "./course";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ course: string }>;
}) {
  const { course } = await params;
  console.log(
    "logging",
    decodeURIComponent(course.split(Separators.CourseNameParam).join(" ")),
  );
  return (
    <CourseDetailsPage
      param={decodeURIComponent(
        course.split(Separators.CourseNameParam).join(" "),
      )}
    />
  );
}
