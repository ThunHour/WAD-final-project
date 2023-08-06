import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

import { PanelPowerSupply, CreatePowerSupply, PowerSupply } from '../../../model/powersupply';
import { PowerSupplyService } from '../../../service/powersupply.service';
import { CategoryService } from '../../../service/category.service';
import { Category } from '../../../model/category';

@Component({
    templateUrl: './powersupply.component.html',
    providers: [MessageService]
})
export class PowerSupplyComponent implements OnInit {

    createPowerSupply: boolean = false;
    powerSupplyDialog: boolean = false;
    itemSelected: any = {}
    categorys: Category[] = []
    category: Category = {};
    deletePowerSupplyDialog: boolean = false;
    deletePowerSupplysDialog: boolean = false;
    panelPowerSupplys: PanelPowerSupply[] = [];
    panelPowerSupply: PanelPowerSupply = {};
    powerSupply: CreatePowerSupply = {};
    file: any[] = []
    selectedPanelPowerSupply: PanelPowerSupply[] = [];

    submitted: boolean = false;
    uploadedFiles: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    constructor(private category_service: CategoryService, private messageService: MessageService, private powerSupply_service: PowerSupplyService) { }

    ngOnInit() {
        this.category_service.getAllCategory().subscribe((data: any) => {
            this.categorys = data.data
        }
        )
        this.powerSupply_service.getAllMotherBoard().subscribe((data: any) => {
            this.panelPowerSupplys = data.data;
        })
    }

    openNew() {
        this.panelPowerSupply = {};
        this.powerSupply = {};
        this.itemSelected = {}
        this.submitted = false;
        this.powerSupplyDialog = true;
        this.createPowerSupply = true
    }

    deleteSelectedPowerSupplys() {
        this.deletePowerSupplysDialog = true;
    }

    editProduct(panelPowerSupply: PanelPowerSupply) {
        this.panelPowerSupply = { ...panelPowerSupply };
        this.powerSupply.categoryId = panelPowerSupply.powerSupply ? panelPowerSupply.powerSupply[0].categoryId : ""
        this.powerSupply.id = panelPowerSupply.powerSupply ? panelPowerSupply.powerSupply[0].id : ""
        this.powerSupply.color = panelPowerSupply.powerSupply ? panelPowerSupply.powerSupply[0].color?.color : ""
        this.powerSupply.model = panelPowerSupply.powerSupply ? panelPowerSupply.powerSupply[0].model : ""
        this.powerSupply.spec = panelPowerSupply.powerSupply ? panelPowerSupply.powerSupply[0].spec : ""
        this.powerSupply.price = panelPowerSupply.powerSupply ? panelPowerSupply.powerSupply[0].price : 0
        this.itemSelected = this.categorys.filter((item) => item.id == panelPowerSupply.category?.id)[0]
        this.powerSupplyDialog = true;
        this.createPowerSupply = false
    }

    deleteProduct(panelPowerSupply: PanelPowerSupply) {
        this.deletePowerSupplyDialog = true;
        this.panelPowerSupply = { ...panelPowerSupply };
    }

    async confirmDeleteSelected() {
        this.deletePowerSupplysDialog = false;
        this.panelPowerSupplys = this.panelPowerSupplys.filter(val => !this.selectedPanelPowerSupply.includes(val));
        for (let i = 0; i < this.selectedPanelPowerSupply.length; i++) {
            await this.powerSupply_service.deleteMotherBoard(this.selectedPanelPowerSupply[i].id).subscribe((data: any) => {
                this.panelPowerSupplys = this.panelPowerSupplys.filter(val => val.id !== this.category.id);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'PowerSupply Deleted', life: 3000 });

            });
        }
        this.selectedPanelPowerSupply = [];
    }

    async confirmDelete() {
        this.deletePowerSupplyDialog = false;
        await this.powerSupply_service.deleteMotherBoard(this.panelPowerSupply.id).subscribe((data: any) => {
            this.panelPowerSupplys = this.panelPowerSupplys.filter(val => val.id !== this.panelPowerSupply.id);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'PowerSupply Deleted', life: 3000 });
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Delete Fail ', detail: 'PowerSupply Deleted not Successful', life: 3000 });
        });
    }

    hideDialog() {
        this.powerSupplyDialog = false;
        this.submitted = false;
    }

    async saveProduct() {
        this.submitted = true;

        if (this.powerSupply.model?.trim()) {
            if (this.powerSupply.id) {
                let formdata = new FormData();
                formdata.set('model', this.powerSupply.model || "");
                formdata.set('categoryId', this.itemSelected.id);
                formdata.set('itemId', this.powerSupply.id || "");
                formdata.set('price', this.powerSupply.price?.toString() || "");
                formdata.set('color', this.powerSupply.color || "");
                formdata.set('spec', this.powerSupply.spec || "");
                if (this.file != null) {
                    this.uploadedFiles.forEach((file) => { formdata.append('file', file); });
                }
                await this.powerSupply_service.updateMotherBoard(formdata, this.panelPowerSupply.id).subscribe((data: any) => {
                    this.powerSupply_service.getAllMotherBoard().subscribe((data: any) => {
                        this.panelPowerSupplys = data.data;

                    });
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Gpu Updated', life: 3000 });
                }, error => {
                    this.messageService.add({ severity: 'error', summary: 'Create Fail ', detail: 'Gpu create not Successful', life: 3000 });
                })
            } else {
                var formdata = new FormData();
                formdata.set('model', this.powerSupply.model || "");
                formdata.set('categoryId', this.itemSelected.id);
                this.uploadedFiles.forEach((file) => { formdata.append('file', file); });
                formdata.set('price', this.powerSupply.price?.toString() || "");
                formdata.set('color', this.powerSupply.color || "");
                formdata.set('spec', this.powerSupply.spec || "");
                await this.powerSupply_service.createMotherBoard(formdata).subscribe((data: any) => {
                    this.panelPowerSupplys.push(data.data)
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Gpu Created', life: 3000 });
                }, error => {
                    this.messageService.add({ severity: 'error', summary: 'Update Fail ', detail: 'Gpu Update not Successful', life: 3000 });
                });
            }

            this.panelPowerSupplys = [...this.panelPowerSupplys];
            this.powerSupplyDialog = false;
            this.panelPowerSupply = {};
            this.uploadedFiles = []
            this.createPowerSupply = false
        }
    }



    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
    onUpload(event: any) {
        for (let file of event.target.files) {
            this.uploadedFiles.push(file);
        }
        this.messageService.add({ severity: 'info', summary: 'Success', detail: event.target.files.length + ' File Uploaded' });
    }
}
