import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TutorialService } from 'src/app/services/tutorial.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tutorial } from 'src/app/models/tutorial';


@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent  implements OnInit{
  tutorialForm!: FormGroup;
  tutorials: Tutorial[] = [];

constructor(
  private formBuilder: FormBuilder, private tutarialService :TutorialService , private fb: FormBuilder) {
  this.tutorialForm = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    description: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    duration: ['', Validators.required],
    video: ['', Validators.required],
    level: ['', Validators.required],
  });
}
addTutorial(): void {
  const newTutorial = this.tutorialForm.value;

  this.tutarialService.addtutorial(newTutorial)
    .subscribe(
      (response: any) => {
        console.log('success, add', response);
        alert('Tutorial added successfully!');
      },
      (error: any) => {
        console.error('erreur, add', error);
        alert('An error occurred while adding the tutorial. Please try again.');
      }
    );
}
cancelEdit(){
  this.tutorialForm.reset();
  this.selectedTutorial = null;
}
 
  level:String[]=['BEGINNER ','INTERMEDIATE','ADVANCED'];
  
  
  
  ngOnInit(): void{
   this.loadUsers();
  }
  loadUsers(): void{
    this.tutarialService.getAllTutorials()
    .subscribe(
      users => this.tutorials = users,
      error => console.error('error, getall', error)
    );
  }

  selectedTutorial: Tutorial | null = null;
  
  
 

  
  createForm(): void {
    this.tutorialForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
      description: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
      duration: ['', [Validators.required, Validators.pattern('[0-9]{8}')]],
      video: ['', Validators.required],
  
      level: ['', Validators.required],
    
      
    });
  }

  
  editUser(tutorial: Tutorial): void {
    this.selectedTutorial = tutorial;
    this.tutorialForm.patchValue({
      title: tutorial.title,
      description: tutorial.description,
      duration: tutorial.duration,
      vidéo: tutorial.video,
      level: tutorial.level
    });
  }
  updateTutorial(): void {
    if (this.selectedTutorial && this.tutorialForm.valid) {
      const updatedTutorial = { ...this.selectedTutorial, ...this.tutorialForm.value } as Tutorial;
      this.tutarialService.updatetutorial(this.selectedTutorial.tutorialId, updatedTutorial).subscribe(
        response => {
          console.log('success, updateUser', response);
          this.loadUsers();
          this.tutorialForm.reset();
          this.selectedTutorial=null; 
        },
        error => console.error('error, updateTutorial', error)
      );
    }
  }

}