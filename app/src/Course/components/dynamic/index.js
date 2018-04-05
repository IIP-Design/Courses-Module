import { DynamicImport } from 'App/helpers';


export const LessonList = DynamicImport({
  loader: () => import(
    /* webpackChunkName: 'LessonList' */
    'Course/components/LessonList'
  )
});

export const InstructorList = DynamicImport({
  loader: () => import(
    /* webpackChunkName: 'InstructorList' */
    'Course/components/InstructorList'
  )
});

export const MediaObject = DynamicImport({
  loader: () => import(
    /* webpackChunkName: 'MediaObject' */
    'App/components/MediaObject'
  )
});