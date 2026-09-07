import { Routes } from '@angular/router';
import { Variables } from './components/variables/variables';
import { DataBinding } from './components/data-binding/data-binding';
import { DirectiveExp } from './directive-exp/directive-exp';
import { NotFound } from './not-found/not-found';
import { ControlFlow } from './control-flow/control-flow';
import { TemForm } from './components/tem-form/tem-form';
import { ReactiveForm } from './components/reactive-form/reactive-form';
import { SignalBasic } from './components/signal-basic/signal-basic';
import { SignalForm } from './components/signal-form/signal-form';
import { GetAPIex } from './components/get-apiex/get-apiex';
import { ClientCRUD } from './components/client-crud/client-crud';
import { PipeEx } from './components/pipe-ex/pipe-ex';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'dataBinding',
        pathMatch: 'full'
    },
    {
        path:'variables',
        component: Variables
    },
    {
        path:'dataBinding',
        component: DataBinding
    },
    {
        path:'directives',
        component: DirectiveExp
    },
    {
        path:'control-flow',
        component: ControlFlow
    },
    {
        path:'template-form',
        component: TemForm
    },
    {
        path:'reactive-form',
        component: ReactiveForm
    },
    {
        path:'signal-basic',
        component: SignalBasic
    },
    {
        path:'signal-form',
        component: SignalForm
    },
    {
        path:'get-api-example',
        component: GetAPIex
    },
    {
        path:'client-CRUD',
        component: ClientCRUD
    },
    {
        path:'pipe-example',
        component: PipeEx
    },
    {
        path:'**',
        component: NotFound
    },
];
