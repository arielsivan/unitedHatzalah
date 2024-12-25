import { create } from 'zustand';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
} from 'firebase/firestore';
import { Lesson } from '@/types/data'; // Ensure Lesson type is properly defined
import { db } from '@/configs/FirebaseConfig';

interface LessonState {
  lessons: Lesson[];
  loading: boolean;
  error: string | null;
  fetchLessons: () => Promise<void>;
  fetchLesson: (id: string) => Promise<Lesson | null>;
  addLesson: (lesson: Omit<Lesson, 'id'>) => Promise<void>;
  updateLesson: (id: string, updates: Partial<Lesson>) => Promise<void>;
  deleteLesson: (id: string) => Promise<void>;
}

const useLessonStore = create<LessonState>((set, get) => ({
  lessons: [],
  loading: false,
  error: null,

  fetchLessons: async () => {
    set({ loading: true, error: null });
    try {
      const querySnapshot = await getDocs(collection(db, 'lessons'));
      const lessons: Lesson[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Lesson, 'id'>),
      }));
      set({ lessons });
    } catch (error: unknown) {
      if (error instanceof Error) {
        set({ error: error.message });
      } else {
        console.error('Unknown error:', error);
        set({ error: 'An unexpected error occurred.' });
      }
    } finally {
      set({ loading: false });
    }
  },

  fetchLesson: async (id) => {
    set({ loading: true, error: null });
    try {
      const lessonDoc = doc(db, 'lessons', id);
      const lessonSnapshot = await getDoc(lessonDoc);

      if (lessonSnapshot.exists()) {
        const lesson: Lesson = {
          id: lessonSnapshot.id,
          ...(lessonSnapshot.data() as Omit<Lesson, 'id'>),
        };
        return lesson;
      } else {
        set({ error: 'Lesson not found.' });
        return null;
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        set({ error: error.message });
      } else {
        set({ error: 'An unexpected error occurred.' });
      }
      return null;
    } finally {
      set({ loading: false });
    }
  },

  addLesson: async (lesson) => {
    try {
      const docRef = await addDoc(collection(db, 'lessons'), lesson);
      const newLesson: Lesson = { id: docRef.id, ...lesson };
      set((state) => ({ lessons: [...state.lessons, newLesson] }));
    } catch (error: unknown) {
      if (error instanceof Error) {
        set({ error: error.message });
      }
    }
  },

  updateLesson: async (id, updates) => {
    try {
      const lessonDoc = doc(db, 'lessons', id);
      await updateDoc(lessonDoc, updates);
      set((state) => ({
        lessons: state.lessons.map((lesson) =>
          lesson.id === id ? { ...lesson, ...updates } : lesson,
        ),
      }));
    } catch (error: unknown) {
      if (error instanceof Error) {
        set({ error: error.message });
      }
    }
  },

  deleteLesson: async (id) => {
    try {
      const lessonDoc = doc(db, 'lessons', id);
      await deleteDoc(lessonDoc);
      set((state) => ({
        lessons: state.lessons.filter((lesson) => lesson.id !== id),
      }));
    } catch (error: unknown) {
      if (error instanceof Error) {
        set({ error: error.message });
      }
    }
  },
}));

export default useLessonStore;
