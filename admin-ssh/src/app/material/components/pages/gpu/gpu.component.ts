import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Category } from 'src/app/material/model/category';
import { PanelGpu, CreateGpu } from 'src/app/material/model/gpu';
import { GpuService } from 'src/app/material/service/gpu.service';

import { CategoryService } from '../../../service/category.service';

@Component({
    templateUrl: './gpu.component.html',
    providers: [MessageService]
})
export class GpuComponent implements OnInit {
    createGpu: boolean = false;
    gpuDialog: boolean = false;
    itemSelected: any = {}
    categorys: Category[] = []
    category: Category = {};
    deleteGpuDialog: boolean = false;
    deleteGpusDialog: boolean = false;
    panelGpus: PanelGpu[] = [];
    panelGpu: PanelGpu = {};
    gpu: CreateGpu = {};
    file: any[] = []
    selectedPanelGpu: PanelGpu[] = [];

    submitted: boolean = false;
    uploadedFiles: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    constructor(private messageService: MessageService, private category_service: CategoryService, private gpu_service: GpuService) { }

    ngOnInit() {
        this.category_service.getAllCategory().subscribe((data: any) => {
            this.categorys = data.data
        })
        this.gpu_service.getAllGpu().subscribe((data: any) => {
            this.panelGpus = data.data
        })
    }

    openNew() {
        this.panelGpu = {};
        this.gpu = {};
        this.itemSelected = {}
        this.submitted = false;
        this.gpuDialog = true;
        this.createGpu = true
    }

    deleteSelectedPanelGpu() {
        this.deleteGpusDialog = true;
    }

    editProduct(panelGpu: PanelGpu) {
        this.panelGpu = { ...panelGpu };
        this.gpu.categoryId = panelGpu.gpu ? panelGpu.gpu[0].categoryId : ""
        this.gpu.id= panelGpu.gpu ? panelGpu.gpu[0].id : ""
        this.gpu.color = panelGpu.gpu ? panelGpu.gpu[0].color?.color : ""
        this.gpu.model = panelGpu.gpu ? panelGpu.gpu[0].model : ""
        this.gpu.spec = panelGpu.gpu ? panelGpu.gpu[0].spec : ""
        this.gpu.price = panelGpu.gpu ? panelGpu.gpu[0].price : 0
        this.itemSelected = this.categorys.filter((item) => item.id == panelGpu.category?.id)[0]
        this.gpuDialog = true;
        this.createGpu = false
    }

    deleteProduct(panelGpu: PanelGpu) {
        this.deleteGpuDialog = true;
        this.panelGpu = { ...panelGpu };
    }

    async confirmDeleteSelected() {
        this.deleteGpusDialog = false;
        this.panelGpus = this.panelGpus.filter(val => !this.selectedPanelGpu.includes(val));
        for (let i = 0; i < this.selectedPanelGpu.length; i++) {
            await this.gpu_service.deleteGpu(this.selectedPanelGpu[i].id).subscribe((data: any) => {
                this.panelGpus = this.panelGpus.filter(val => val.id !== this.category.id);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Gpu Deleted', life: 3000 });

            });
        }
        this.selectedPanelGpu = [];
    }

    async confirmDelete() {
        this.deleteGpuDialog = false;
        await this.gpu_service.deleteGpu(this.panelGpu.id).subscribe((data: any) => {
            this.panelGpus = this.panelGpus.filter(val => val.id !== this.panelGpu.id);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Gpu Deleted', life: 3000 });
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Delete Fail ', detail: 'Gpu Deleted not Successful', life: 3000 });
        });
    }

    hideDialog() {
        this.gpuDialog = false;
        this.submitted = false;
    }

    async saveProduct() {
        this.submitted = true;

        if (this.gpu.model?.trim()) {
            if (this.gpu.id) {
                let formdata = new FormData();
                formdata.set('model', this.gpu.model || "");
                formdata.set('categoryId', this.itemSelected.id);
                formdata.set('itemId', this.gpu.id||"");
                formdata.set('price', this.gpu.price?.toString() || "");
                formdata.set('color', this.gpu.color || "");
                formdata.set('spec', this.gpu.spec || "");
                if (this.file != null) {
                    this.uploadedFiles.forEach((file) => { formdata.append('file', file); });
                }
                await this.gpu_service.updateGpu(formdata,this.panelGpu.id).subscribe((data: any) => {
                    this.gpu_service.getAllGpu().subscribe((data: any) => {
                        this.panelGpus = data.data;

                    });
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Gpu Updated', life: 3000 });
                }, error => {
                    this.messageService.add({ severity: 'error', summary: 'Create Fail ', detail: 'Gpu create not Successful', life: 3000 });
                })
            } else {
                var formdata = new FormData();
                formdata.set('model', this.gpu.model || "");
                formdata.set('categoryId', this.itemSelected.id);
                this.uploadedFiles.forEach((file) => { formdata.append('file', file); });
                formdata.set('price', this.gpu.price?.toString() || "");
                formdata.set('color', this.gpu.color || "");
                formdata.set('spec', this.gpu.spec || "");
                await this.gpu_service.createGpu(formdata).subscribe((data: any) => {
                    this.panelGpus.push(data.data)
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Gpu Created', life: 3000 });
                }, error => {
                    this.messageService.add({ severity: 'error', summary: 'Update Fail ', detail: 'Gpu Update not Successful', life: 3000 });
                });
            }

            this.panelGpus = [...this.panelGpus];
            this.gpuDialog = false;
            this.panelGpu = {};
            this.uploadedFiles = []
            this.createGpu = false
        }
    }


    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
    onUpload(event: any) {
        for (let file of event.target.files) {
            this.uploadedFiles.push(file);
        }
        // this.file = event.target.files
        this.messageService.add({ severity: 'info', summary: 'Success', detail: event.target.files.length + ' File Uploaded' });
    }
}
