import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginForm } from './components/login-form/login-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginForm],
  templateUrl: './app.html',
  styleUrls: ['./app.scss', '../styles.scss'],
})
export class App {
  protected readonly title = signal('angular-pet-peeves');
}
