import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Brand } from 'src/app/material/model/brand';
import { BrandService } from 'src/app/material/service/brand.service';


@Component({
    templateUrl: './brand.component.html',
    providers: [MessageService]
})
export class BrandComponent implements OnInit {

    brandDialog: boolean = false;
    deleteBrandDialog: boolean = false;
    deleteBrandsDialog: boolean = false;
    uploadedFiles: any[] = [];

    selectedBrands: Brand[] = [];

    submitted: boolean = false;
    brand: Brand = {};
    rowsPerPageOptions = [5, 10, 20];
    brands: Brand[] = [];
    file: any = {};
    constructor(private messageService: MessageService, private brand_service: BrandService) { }

    ngOnInit() {
        this.brand_service.getAllBrand().subscribe((data: any) => {
            this.brands = data.data;
        });


    }
    onUpload(event: any) {
        this.file = event.target.files[0];
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    }


    openNew() {
        this.brand = {};
        this.submitted = false;
        this.brandDialog = true;
    }

    deleteSelectedProducts() {
        this.deleteBrandsDialog = true;
    }

    editProduct(brand: Brand) {
        this.brand = { ...brand };
        this.brandDialog = true;
    }

    deleteProduct(brand: Brand) {
        this.deleteBrandDialog = true;
        this.brand = { ...brand };
    }

     confirmDeleteSelected() {
        this.deleteBrandsDialog = false;
        this.brands = this.brands.filter(val => !this.selectedBrands.includes(val));
        for (let i = 0; i < this.selectedBrands.length; i++) {
             this.brand_service.deleteBrand(this.selectedBrands[i].id).subscribe((data: any) => {
                this.brands = this.brands.filter(val => val.id !== this.brand.id);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Brand Deleted', life: 3000 });
                this.brand = {};
            });
        }
        this.selectedBrands = [];
    }

     confirmDelete() {
        this.deleteBrandDialog = false;
         this.brand_service.deleteBrand(this.brand.id).subscribe((data: any) => {
            this.brands = this.brands.filter(val => val.id !== this.brand.id);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Brand Deleted', life: 3000 });
            this.brand = {};
        });

    }

    hideDialog() {
        this.brandDialog = false;
        this.submitted = false;
    }

     saveProduct() {
        this.submitted = true;

        if (this.brand.brandName?.trim()) {

            if (this.brand.id) {
                let formddata = new FormData();

                formddata.set('brandName', this.brand.brandName);
                if (this.file != null) {
                    formddata.set('file', this.file);
                }
                let brand = {}
                 this.brand_service.updateBrand(formddata, this.brand.id).subscribe((data: any) => {

                    this.brand_service.getAllBrand().subscribe((data: any) => {
                        this.brands = data.data;
                    });
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Brand Updated', life: 3000 });
                })
            } else {
                var formdata = new FormData();
                formdata.set('brandName', this.brand.brandName);
                formdata.set('file', this.file);
                 this.brand_service.createBrand(formdata).subscribe((data: any) => {
                    this.brands.push(data.data)
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Brand Created', life: 3000 });

                });
            }

            this.brands = [...this.brands];
            this.brandDialog = false;
            this.file = {};
            this.brand = {};
        }
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.brands.length; i++) {
            if (this.brands[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
}
