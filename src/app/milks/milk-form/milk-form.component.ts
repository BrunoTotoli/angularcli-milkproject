import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-milk-form',
  templateUrl: './milk-form.component.html',
  styleUrls: ['./milk-form.component.scss']
})
export class MilkFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      date: [null],
      quantity: [null],
      periodTime: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){

  }

  onCancel(){

  }
}
