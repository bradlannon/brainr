import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { ComputersComponent } from './computer/computers/computers.component';
import { ComputerComponent } from './computer/computer/computer.component';
import { EditComputerComponent } from './computer/edit-computer/edit-computer.component';
import { AddComputerComponent } from './computer/add-computer/add-computer.component';
import { ContactsComponent } from './contact/contacts/contacts.component';
import { ContactComponent } from './contact/contact/contact.component';
import { EditContactComponent } from './contact/edit-contact/edit-contact.component';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { BrainrComponent } from './brainr/brainr.component';
import { HowTosComponent } from './howto/howtos/howtos.component';
import { HowToComponent } from './howto/howto/howto.component';
import { EditHowToComponent } from './howto/edit-howto/edit-howto.component';
import { AddHowToComponent } from './howto/add-howto/add-howto.component';
import { TasksComponent } from './task/tasks/tasks.component';
import { TaskComponent } from './task/task/task.component';
import { EditTaskComponent } from './task/edit-task/edit-task.component';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { UserComponent } from './user/user/user.component';
import { UsersComponent } from './user/users/users.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { TestComponent } from './test/test/test.component';
import { ExpensesComponent } from './expense/expenses/expenses.component';
import { ExpenseComponent } from './expense/expense/expense.component';
import { EditExpenseComponent } from './expense/edit-expense/edit-expense.component';
import { AddExpenseComponent } from './expense/add-expense/add-expense.component';


export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: EmailComponent },
    // { path: 'signup', component: SignupComponent },
    // { path: 'login-email', component: EmailComponent },
    // { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
   
  {path: 'test', component:TestComponent, canActivate: [AuthGuard]},

  {path: 'computers', component:ComputersComponent, canActivate: [AuthGuard]},
  {path:'computer/:id', component:ComputerComponent, canActivate: [AuthGuard]},
  {path: 'add-computer', component:AddComputerComponent, canActivate: [AuthGuard]},
  {path:'edit-computer/:id', component:EditComputerComponent, canActivate: [AuthGuard]},

  {path: 'users', component:UsersComponent, canActivate: [AuthGuard]},
  {path:'user/:id', component:UserComponent, canActivate: [AuthGuard]},
  {path: 'add-user', component:AddUserComponent, canActivate: [AuthGuard]},
  {path:'edit-user/:id', component:EditUserComponent, canActivate: [AuthGuard]},

  {path: 'contacts', component:ContactsComponent, canActivate: [AuthGuard]},
  {path:'contact/:id', component:ContactComponent, canActivate: [AuthGuard]},
  {path: 'add-contact', component:AddContactComponent, canActivate: [AuthGuard]},
  {path:'edit-contact/:id', component:EditContactComponent, canActivate: [AuthGuard]},

  {path: 'expenses', component:ExpensesComponent, canActivate: [AuthGuard]},
  {path:'expense/:id', component:ExpenseComponent, canActivate: [AuthGuard]},
  {path: 'add-expense', component:AddExpenseComponent, canActivate: [AuthGuard]},
  {path:'edit-expense/:id', component:EditExpenseComponent, canActivate: [AuthGuard]},


  {path: 'tasks', component:TasksComponent, canActivate: [AuthGuard]},
  {path:'task/:id', component:TaskComponent, canActivate: [AuthGuard]},
  {path: 'add-task', component:AddTaskComponent, canActivate: [AuthGuard]},
  {path:'edit-task/:id', component:EditTaskComponent, canActivate: [AuthGuard]},

  {path: 'howtos', component:HowTosComponent, canActivate: [AuthGuard]},
  {path:'howto/:id', component:HowToComponent, canActivate: [AuthGuard]},
  {path: 'add-howto', component:AddHowToComponent, canActivate: [AuthGuard]},
  {path:'edit-howto/:id', component:EditHowToComponent, canActivate: [AuthGuard]},
   
   { path: 'brainr', component: BrainrComponent, canActivate: [AuthGuard] }
   
   /*
    { path: 'computers', component: ComputersComponent, canActivate: [AuthGuard] },
    { path: 'computers/:id', component: EditComputerComponent, canActivate: [AuthGuard] },
    { path: 'contacts', component: ContactsComponent, canActivate: [AuthGuard] },
    { path: 'contacts/:id', component: EditContactComponent, canActivate: [AuthGuard] },
    { path: 'brainr', component: BrainrComponent, canActivate: [AuthGuard] },
    { path: 'howtos', component: HowTosComponent, canActivate: [AuthGuard] },
    { path: 'howtos/:id', component: EditHowToComponent, canActivate: [AuthGuard] },
    { path: 'tasks', component: TasksComponent, canActivate: [AuthGuard] },
    { path: 'tasks/:id', component: TasksComponent, canActivate: [AuthGuard] },
    { path: 'users', component: UserComponent, canActivate: [AuthGuard] },
    { path: 'users/:id', component: UserComponent, canActivate: [AuthGuard] }
    */
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);