import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {MaterialModule, MdNativeDateModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

import { TestComponent } from './test/test/test.component';

//import { Computer } from './computer/computer';
//mport { ComputerComponent } from './computer/computer.component';
//import { ComputerDisplayComponent } from './computer/computer-display.component';
//import { ComputerService } from './computer/computer.service';
//import { ComputerFilterPipe } from './computer/computer-filter.pipe';

import { AuthGuard } from './auth.service';
import { routes } from './app.routes';

import { BrainrComponent } from './brainr/brainr.component';
import { BrainrPipe } from './brainr/brainr.pipe';

import { ComputerComponent } from './computer/computer/computer.component';
import { ComputersComponent } from './computer/computers/computers.component';
import { ComputerService } from './computer/computer.service';
import { ComputerFilterPipe } from './computer/computer.pipe';

import { ContactService } from './contact/contact.service';
import { ContactComponent } from './contact/contact/contact.component';
import { ContactsComponent } from './contact/contacts/contacts.component';
import { ContactFilterPipe } from './contact/contact.pipe';

import { HowToService } from './howto/howto.service';
import { HowToComponent } from './howto/howto/howto.component';
import { HowTosComponent } from './howto/howtos/howtos.component';
import { HowToFilterPipe } from './howto/howto.pipe';

import { UserService } from './user/user.service';
import { UserComponent } from './user/user/user.component';
import { UsersComponent } from './user/users/users.component';
import { UserFilterPipe } from './user/users.pipe';

import { TaskService } from './task/task.service';
import { TaskComponent } from './task/task/task.component';
import { TasksComponent } from './task/tasks/tasks.component';
import { TaskFilterPipe } from './task/task.pipe';

import { ExpenseService } from './expense/expense.service';
import { ExpenseComponent } from './expense/expense/expense.component';
import { ExpensesComponent } from './expense/expenses/expenses.component';
import { ExpenseFilterPipe } from './expense/expense.pipe';
import { EditExpenseComponent } from './expense/edit-expense/edit-expense.component';
import { AddExpenseComponent } from './expense/add-expense/add-expense.component';


import { AddComputerComponent } from './computer/add-computer/add-computer.component';
import { EditComputerComponent } from './computer/edit-computer/edit-computer.component';
import { EditContactComponent } from './contact/edit-contact/edit-contact.component';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { EmailEditComponent } from './email/email-edit/email-edit.component';
import { EmailAddComponent } from './email/email-add/email-add.component';
import { EditHowToComponent } from './howto/edit-howto/edit-howto.component';
import { AddHowToComponent } from './howto/add-howto/add-howto.component';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { EditTaskComponent } from './task/edit-task/edit-task.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { AddUserComponent } from './user/add-user/add-user.component';


export const firebaseConfig = {
    apiKey: "AIzaSyA3eZpgRMSaQpsD4Bo6xTiRQj-6RNo4tkM",
    authDomain: "brainr-71c06.firebaseapp.com",
    databaseURL: "https://brainr-71c06.firebaseio.com",
    projectId: "brainr-71c06",
    storageBucket: "brainr-71c06.appspot.com",
    messagingSenderId: "858245639120"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    BrainrComponent,
    BrainrPipe,
    ExpenseComponent,
    ExpensesComponent,
    ExpenseFilterPipe,
    EditExpenseComponent,
    AddExpenseComponent,
    ComputerComponent,
    ComputersComponent,
    ComputerFilterPipe,
    BrainrComponent,
    ContactComponent,
    ContactsComponent,
    ContactFilterPipe,
    HowToComponent,
    HowTosComponent,
    HowToFilterPipe,
    UserComponent,
    UsersComponent,
    UserFilterPipe,
    TaskComponent,
    TasksComponent,
    TaskFilterPipe,
    ComputerComponent,
    AddComputerComponent,
    EditComputerComponent,
    EditContactComponent,
    AddContactComponent,
    EmailEditComponent,
    EmailAddComponent,
    EditHowToComponent,
    AddHowToComponent,
    AddTaskComponent,
    EditTaskComponent,
    EditUserComponent,
    AddUserComponent,
    TestComponent,
    
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    //MdButtonModule, MdCheckboxModule,
    MaterialModule,
    MdNativeDateModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard,ComputerService,ContactService,HowToService,TaskService,UserService,ExpenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
