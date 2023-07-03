import { Component, OnInit } from '@angular/core';
import { Filter } from 'src/app/classes/filter';
import { TypeAnnonce } from '../../enum'
import { AnnonceService } from 'src/app/services/annonce.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  private data: any;
  filter: Filter = new Filter(" ", null, null, null)
  public TypeAnnonce = TypeAnnonce;

  @Output() filteredDataEvent = new EventEmitter<any>();

  sendFilteredData(value: any) {
    this.filteredDataEvent.emit(value);
  }

  updateTitre(event: any) {
    const value = event?.target?.value;
    if (value) {
      this.filter.titre = value;
    }
  }

  updatePrixMax(event: any) {
    const value = event?.target?.value;
    if (value) {
      this.filter.prixMax = value;
    } else {
      this.filter.prixMax = null;
    }
  }

  updatePrixMin(event: any) {
    const value = event?.target?.value;
    if (value) {
      this.filter.prixMin = value;
    } else {
      this.filter.prixMin = null;
    }
  }

  selectType(type: TypeAnnonce | null) {
    this.filter.type = type;
  }

  constructor(private service: AnnonceService) { }

  ngOnInit(): void {
    this.getFilteredData();
  }

  public getFilteredData() {
    let response = this.service.getData(this.filter).subscribe(
      response => {
        this.data = response;
        this.sendFilteredData(this.data);
      },
      error => {
        console.log("error while getting user Details");
      }
    );
  }
}
