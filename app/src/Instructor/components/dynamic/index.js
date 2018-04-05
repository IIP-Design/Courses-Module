import { DynamicImport } from 'App/helpers';


export const Instructor = DynamicImport({
  loader: () => import(
    /* webpackChunkName: 'Instructor' */
    'Instructor/components/Instructor'
  )
});
