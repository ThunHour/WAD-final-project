import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

import { Brand } from '../../../model/brand';
import { BrandService } from '../../../service/brand.service';
import { Category } from '../../../model/category';
import { CategoryService } from 'src/app/material/service/category.service';


@Component({
    templateUrl: './category.component.html',
    providers: [MessageService]
})
export class CategoryComponent implements OnInit {

    categoryDialog: boolean = false;

    deleteCategoryDialog: boolean = false;

    deleteCategorysDialog: boolean = false;

    categorys: Category[] = [];

    category: Category = {};

    selectedCategory: Category[] = [];

    submitted: boolean = false;
    brands: Brand[] = []
    brand: Brand = {}
    itemSelected:any;
    rowsPerPageOptions = [5, 10, 20];
    file: any = {}
    createCategory:boolean=false;

    constructor(private brand_service: BrandService, private messageService: MessageService, private category_service: CategoryService) { }

    async ngOnInit() {
        await this.brand_service.getAllBrand().subscribe((data: any) => {
            this.brands = data.data;
        });
        await this.category_service.getAllCategory().subscribe((data: any) => {
            this.categorys = data.data;
            return
        })

    }

    openNew() {
        this.category = {};
        this.submitted = false;
        this.file = {}
        this.itemSelected = {}
        this.categoryDialog = true;
        this.createCategory=false;
    }

    deleteSelectedCategorys() {
        this.deleteCategorysDialog = true;
    }

    editCategory(category: Category) {
        this.category = { ...category };
        this.itemSelected=this.brands.filter((brand)=>brand.id==category.brand?.id)[0]
        this.categoryDialog = true;
        this.createCategory=true;
    }

    deleteCategory(category: Category) {
        this.deleteCategoryDialog = true;
        this.category = { ...category };
    }

    async confirmDeleteSelected() {
        this.deleteCategorysDialog = false;
        this.categorys = this.categorys.filter(val => !this.selectedCategory.includes(val));
        for (let i = 0; i < this.selectedCategory.length; i++) {
            await this.category_service.deleteCategory(this.selectedCategory[i].id).subscribe((data: any) => {
                this.categorys = this.categorys.filter(val => val.id !== this.category.id);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Category Deleted', life: 3000 });
                this.category = {};
            });
        }
        this.selectedCategory = [];
    }

    async confirmDelete() {
        this.deleteCategoryDialog = false;
        await this.category_service.deleteCategory(this.category.id).subscribe((data: any) => {
            this.categorys = this.categorys.filter(val => val.id !== this.category.id);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Category Deleted', life: 3000 });
            this.category = {};
        },error=>{
            this.messageService.add({ severity: 'error', summary: 'Delete Fail ', detail: 'Category Deleted not Successful', life: 3000 });
        });
    }

    hideDialog() {
        this.categoryDialog = false;
        this.submitted = false;
    }

    async saveCategory() {
        this.submitted = true;

        if (this.category.categoryName?.trim()) {

            if (this.category.id) {
                let formddata = new FormData();

                formddata.set('categoryName', this.category.categoryName);
                formddata.set('brandId', this.itemSelected.id);
                if (this.file != null) {
                    formddata.set('file', this.file);
                }
                await this.category_service.updateCategory(formddata, this.category.id).subscribe((data: any) => {
                    this.category_service.getAllCategory().subscribe((data: any) => {
                        this.categorys = data.data;
                    });
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Category Updated', life: 3000 });
                },error=>{
                    this.messageService.add({ severity: 'error', summary: 'Create Fail ', detail: 'Category create not Successful', life: 3000 });
                })
            } else {
                var formdata = new FormData();
                formdata.set('categoryName', this.category.categoryName);
                formdata.set('brandId', this.itemSelected.id);
                formdata.set('file', this.file);
                await this.category_service.createCategory(formdata).subscribe((data: any) => {
                    this.categorys.push(data.data)
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Category Created', life: 3000 });

                },error=>{
                    this.messageService.add({ severity: 'error', summary: 'Update Fail ', detail: 'Category Update not Successful', life: 3000 });
                });
            }

            this.brands = [...this.brands];
            this.categoryDialog = false;
            this.createCategory=true;
            this.itemSelected = {}
            this.file = {};
            this.brand = {};
        }
    }


    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
    onUpload(event: any) {
        this.file = event.target.files[0];
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    }

}
