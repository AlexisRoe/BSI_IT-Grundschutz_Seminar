import { useEffect, useState } from "react";
import { type Course, loadCourse } from "@/content/content.utils";

/** Returns the loaded course, or `undefined` while it is still loading. */
export function useCourse(): Course | undefined {
  const [course, setCourse] = useState<Course>();
  useEffect(() => {
    let active = true;
    void loadCourse().then((c) => {
      if (active) setCourse(c);
    });
    return () => {
      active = false;
    };
  }, []);
  return course;
}
