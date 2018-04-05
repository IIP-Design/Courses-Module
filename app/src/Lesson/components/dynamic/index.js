import { DynamicImport } from 'App/helpers';


export const YouTube = DynamicImport({
  loader: () => import(
    /* webpackChunkName: 'react-youtube' */
    'react-youtube'
  )
});


export const Breadcrumbs = DynamicImport({
  loader: () => import(
    /* webpackChunkName: 'Breadcrumbs' */
    'App/components/Breadcrumbs'
  )
});


export const Glossary = DynamicImport({
  loader: () => import(
    /* webpackChunkName: 'Glossary' */
    'Lesson/components/Glossary'
  )
});


export const LessonTabs = DynamicImport({
  loader: () => import(
    /* webpackChunkName: 'LessonTabs' */
    'Lesson/components/LessonTabs'
  )
});


export const ButtonNav = DynamicImport({
  loader: () => import(
    /* webpackChunkName: 'ButtonNav' */
    'Lesson/components/ButtonNav'
  )
});


export const LessonPagination = DynamicImport({
  loader: () => import(
    /* webpackChunkName: 'LessonPagination' */
    'Lesson/components/LessonPagination'
  )
});


export const Lesson = DynamicImport({
  loader: () => import(
    /* webpackChunkName: 'Lesson' */
    'Lesson/components/Lesson'
  )
});
