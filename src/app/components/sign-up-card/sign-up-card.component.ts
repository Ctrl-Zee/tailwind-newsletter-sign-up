import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-sign-up-card',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DialogModule],
  templateUrl: './sign-up-card.component.html',
  styleUrls: ['./sign-up-card.component.scss'],
})
export class SignUpCardComponent {
  submissionForm!: FormGroup;
  dialogVisible = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.submissionForm = this.formBuilder.group({
      emailAddress: ['', [Validators.email, Validators.required]],
    });
  }

  showError(control: string): boolean {
    const hasError =
      this.submissionForm.controls[control].errors &&
      (this.submissionForm.controls[control].touched ||
        this.submissionForm.controls[control].dirty);
    return hasError ?? false;
  }

  subscribe(): void {
    this.dialogVisible = true;
  }

  closeDialog(): void {
    this.submissionForm.reset();
    this.dialogVisible = false;
  }
}
