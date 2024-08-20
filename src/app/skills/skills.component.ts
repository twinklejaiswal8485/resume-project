import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any={
    technologies:[{name:"JavaScript",percent:80,remark:'very-good'}, {name:"Java",percent:70,remark:'good'},{name:"React",percent:80,remark:'very-good'},{name:"Angular",percent:70,remark:'good'}, {name:"Node.js", percent:70,remark:'good'}],
    tools:[{name:"Git",percent:80,remark:'very-good'},{name:"Office",percent:80,remark:'very-good'},{name:"Linux, Windows",percent:70,remark:'good'},{name:"MySql, MongoDB",percent:80,remark:'very-good'},{name:"Docker, Kubernetes",percent:50,remark:'average'}],
    methodologies:[{name:"Agile",percent:70,remark:'good'},{name:"Uml",percent:90,remark:'excellent'},{name:"Low Level Design",percent:70,remark:'good'},{name:"High-Level Design",percent:70,remark:'good'},{name:"CI CD",percent:50,remark:'average'}]
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english);
  }

  ngOnInit(): void {
  }

}

    
    
  
