import { DynamicImport } from 'App/helpers';


export const StepsList = DynamicImport({
  loader: () => import(
    /* webpackChunkName: 'StepsList' */
    'App/components/StepsList'
  )
});

export const Step = DynamicImport({
  loader: () => import(
    /* webpackChunkName: 'Step' */
    'App/components/Step'
  )
});
