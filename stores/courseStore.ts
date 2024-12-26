import { create } from 'zustand';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { Course, Lesson } from '@/types/data'; // Ensure the Course and Lesson interfaces are correctly imported
import { db } from '@/configs/FirebaseConfig';

interface CourseState {
  course: Course | null;
  courses: Course[] | null;
  loading: boolean;
  error: string | null;
  fetchCourse: (id: string) => Promise<void>;
  fetchAllCourses: () => Promise<void>;
}

const useCourseStore = create<CourseState>((set) => ({
  course: null,
  courses: null,
  loading: false,
  error: null,

  fetchCourse: async (id) => {
    set({ loading: true, error: null });
    try {
      const courseDoc = doc(db, 'courses', id);
      const courseSnapshot = await getDoc(courseDoc);

      if (courseSnapshot.exists()) {
        const courseData = courseSnapshot.data();
        const lessonIds: string[] = courseData.lessons || []; // Assuming `lessons` is an array of lesson IDs in courseData

        // Fetch lessons by IDs
        const lessons: Lesson[] = [];
        for (const lessonId of lessonIds) {
          const lessonDoc = doc(db, 'lessons', lessonId);
          const lessonSnapshot = await getDoc(lessonDoc);

          if (lessonSnapshot.exists()) {
            lessons.push({
              id: lessonSnapshot.id,
              ...(lessonSnapshot.data() as Omit<Lesson, 'id'>),
            });
          }
        }

        const course: Course = {
          id: courseSnapshot.id,
          ...(courseData as Omit<Course, 'id' | 'lessons'>), // Exclude `lessons` field to avoid duplication
          lessons: lessons,
        };

        set({
          course: course,
          loading: false,
        });
      } else {
        set({ error: 'Course not found.', loading: false });
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        set({ error: error.message, loading: false });
      } else {
        set({ error: 'An unexpected error occurred.', loading: false });
      }
    }
  },

  fetchAllCourses: async () => {
    set({ loading: true, error: null });
    try {
      const coursesCollection = collection(db, 'courses');
      const coursesSnapshot = await getDocs(coursesCollection);

      const courses: Course[] = [];

      for (const courseDoc of coursesSnapshot.docs) {
        const courseData = courseDoc.data();
        const lessonIds: string[] = courseData.lessons || []; // Assuming `lessons` is an array of lesson IDs in courseData

        // Fetch lessons for each course
        const lessons: Lesson[] = [];
        for (const lessonId of lessonIds) {
          const lessonDoc = doc(db, 'lessons', lessonId);
          const lessonSnapshot = await getDoc(lessonDoc);

          if (lessonSnapshot.exists()) {
            lessons.push({
              id: lessonSnapshot.id,
              ...(lessonSnapshot.data() as Omit<Lesson, 'id'>),
            });
          }
        }

        courses.push({
          id: courseDoc.id,
          ...(courseData as Omit<Course, 'id' | 'lessons'>),
          lessons: lessons,
        });
      }

      set({ courses: courses, loading: false });
    } catch (error: unknown) {
      if (error instanceof Error) {
        set({ error: error.message, loading: false });
      } else {
        set({ error: 'An unexpected error occurred.', loading: false });
      }
    }
  },
}));

export default useCourseStore;
