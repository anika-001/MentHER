import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl} from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-createprofile',
  templateUrl: './createprofile.component.html',
  styleUrls: ['./createprofile.component.scss']
})
export class CreateprofileComponent implements OnInit {
  resumeBuilderForm: FormGroup;
  constructor(private as: AuthService, private Router: Router, private db: AngularFirestore,private formBuilder: FormBuilder, private router: Router) {}
user:any;
  ngOnInit(): void {
    this.as.getUserState().subscribe(res => {
      if (!res) this.Router.navigate(['/signin'])
      this.user = res;
    })

    this.resumeBuilderForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: '',
      experienceBlocks: this.formBuilder.array([this.buildExperienceBlock()]),
      skill1:[''],
      skill2:[''],
      skill3:[''],
      skill4:['']
    });
  }

  buildExperienceBlock(): FormGroup {
    return this.formBuilder.group({
      title: ['', [Validators.required]],
      company: ['', [Validators.required]],
      location: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  save() {
    this.db.collection("UserProfile").doc(this.user.uid).set(this.resumeBuilderForm.value);

    console.log(this.resumeBuilderForm, this.resumeBuilderForm.controls.experienceBlocks.value[0].company);
    console.log('Saved: ' + JSON.stringify(this.resumeBuilderForm.value));
    
    this.router.navigate(['/profilesite'], { queryParams: { 
      fname: this.resumeBuilderForm.get('firstName').value,
      lname: this.resumeBuilderForm.get('lastName').value,
      email: this.resumeBuilderForm.get('email').value,
      phone: this.resumeBuilderForm.get('phone').value,
      title: this.resumeBuilderForm.controls.experienceBlocks.value[0].title,
      company: this.resumeBuilderForm.controls.experienceBlocks.value[0].company,
      location: this.resumeBuilderForm.controls.experienceBlocks.value[0].location,
      startDate: this.resumeBuilderForm.controls.experienceBlocks.value[0].startDate,
      endDate: this.resumeBuilderForm.controls.experienceBlocks.value[0].endDate,
      description: this.resumeBuilderForm.controls.experienceBlocks.value[0].description,
      skill1: this.resumeBuilderForm.get('skill1').value,
      skill2: this.resumeBuilderForm.get('skill2').value,
      skill3: this.resumeBuilderForm.get('skill3').value,
      skill4: this.resumeBuilderForm.get('skill4').value,
    } })
  }

  get experienceBlocks(): FormArray {
    return this.resumeBuilderForm.get('experienceBlocks') as FormArray;
  }

  addExperience() {
    this.experienceBlocks.insert(0, this.buildExperienceBlock());
  }
}