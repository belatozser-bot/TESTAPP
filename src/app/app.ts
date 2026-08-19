import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly title = signal('Hello World');
  readonly userName = signal('Béla');
  readonly clickCount = signal(0);
  readonly currentTech = signal('Angular 19+ (Standalone)');
  readonly features = signal([
    {
      icon: '⚡',
      title: 'Signals & Reactivity',
      desc: 'Fine-grained reactive primitives with instant DOM synchronization.'
    },
    {
      icon: '🚀',
      title: 'Standalone Architecture',
      desc: 'Streamlined components without boilerplate NgModules.'
    },
    {
      icon: '🎨',
      title: 'Modern SCSS Styling',
      desc: 'Glassmorphism, vibrant gradients, and fluid micro-animations.'
    },
    {
      icon: '🛡️',
      title: 'Production Ready',
      desc: 'Optimized build with TypeScript strict mode enabled.'
    }
  ]);

  readonly greetingMessage = computed(() => {
    const name = this.userName().trim() || 'World';
    return `Hello, ${name}! 👋`;
  });

  incrementCount() {
    this.clickCount.update(c => c + 1);
  }

  resetCount() {
    this.clickCount.set(0);
  }

  updateName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.userName.set(input.value);
  }
}
