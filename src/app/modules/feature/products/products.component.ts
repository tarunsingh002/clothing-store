import {Component, OnInit} from '@angular/core';
import {filters, singleFilter} from '../../../../data/FilterData';
import {FormControl, FormGroup} from '@angular/forms';
import {menPants} from '../../../../data/ProductsPage';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  FilterData = filters;
  singleFilterData = singleFilter;

  filterByColor: FormGroup;
  filterBySize: FormGroup;
  singleFilterForm: FormGroup;
  productsPageData = menPants;
  formGroupArray: FormGroup[] = [];
  colorFilter = [];
  sizeFilter = [];

  constructor(private router: Router, private aroute: ActivatedRoute) {
    // this.formGroupArray = [this.filterByColor, this.filterBySize];
  }

  ngOnInit() {
    let formObj = {};
    this.FilterData[0].options.forEach((o) => {
      formObj[o.value] = new FormControl(false);
    });

    this.filterByColor = new FormGroup(formObj);

    let formObj1 = {};
    this.FilterData[1].options.forEach((o) => {
      formObj1[o.value] = new FormControl(false);
    });

    this.filterBySize = new FormGroup(formObj1);

    this.formGroupArray.push(this.filterByColor);
    this.formGroupArray.push(this.filterBySize);

    this.singleFilterForm = new FormGroup({
      filterByPriceRange: new FormControl(null),
      filterByDiscount: new FormControl(null),
      filterByAvailability: new FormControl(null),
    });

    this.filterByColor.valueChanges.subscribe((colorsBoolean) => {
      let i = 0;

      this.colorFilter = [];

      for (const key in colorsBoolean) {
        if (colorsBoolean.hasOwnProperty(key)) {
          if (colorsBoolean[key]) {
            this.colorFilter.push(this.FilterData[0].options[i].value);
          }
          i++;
        }
      }

      if (this.colorFilter.length) {
        let colorFilterParam = this.colorFilter.join();

        this.router.navigate([], {
          relativeTo: this.aroute,
          queryParams: {colors: colorFilterParam},
          queryParamsHandling: 'merge',
        });
      } else {
        this.router.navigate([], {
          relativeTo: this.aroute,
          queryParams: {colors: null},
          queryParamsHandling: 'merge',
        });
      }
    });

    this.filterBySize.valueChanges.subscribe((sizeBoolean) => {
      let i = 0;

      this.sizeFilter = [];

      for (const key in sizeBoolean) {
        if (sizeBoolean.hasOwnProperty(key)) {
          if (sizeBoolean[key]) {
            this.sizeFilter.push(this.FilterData[1].options[i].value);
          }
          i++;
        }
      }

      if (this.sizeFilter.length) {
        let sizeFilterParam = this.sizeFilter.join();

        this.router.navigate([], {
          relativeTo: this.aroute,
          queryParams: {sizes: sizeFilterParam},
          queryParamsHandling: 'merge',
        });
      } else {
        this.router.navigate([], {
          relativeTo: this.aroute,
          queryParams: {sizes: null},
          queryParamsHandling: 'merge',
        });
      }
      console.log(sizeBoolean);
    });

    this.singleFilterForm.get('filterByPriceRange').valueChanges.subscribe((filter) => {
      if (filter === 'all') {
        this.router.navigate([], {
          relativeTo: this.aroute,
          queryParams: {priceRange: null},
          queryParamsHandling: 'merge',
        });
      } else {
        this.router.navigate([], {
          relativeTo: this.aroute,
          queryParams: {priceRange: filter},
          queryParamsHandling: 'merge',
        });
      }
      console.log(filter);
    });
    this.singleFilterForm.get('filterByDiscount').valueChanges.subscribe((filter) => {
      if (filter === 'all') {
        this.router.navigate([], {
          relativeTo: this.aroute,
          queryParams: {discount: null},
          queryParamsHandling: 'merge',
        });
      } else {
        this.router.navigate([], {
          relativeTo: this.aroute,
          queryParams: {discount: filter},
          queryParamsHandling: 'merge',
        });
      }
      console.log(filter);
    });
    this.singleFilterForm.get('filterByAvailability').valueChanges.subscribe((filter) => {
      if (filter === 'all') {
        this.router.navigate([], {
          relativeTo: this.aroute,
          queryParams: {availability: null},
          queryParamsHandling: 'merge',
        });
      } else {
        this.router.navigate([], {
          relativeTo: this.aroute,
          queryParams: {availability: filter},
          queryParamsHandling: 'merge',
        });
      }
      console.log(filter);
    });
  }

  handleMultipleSelectFilter() {}
}
