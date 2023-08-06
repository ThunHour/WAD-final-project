import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

import { CategoryService } from '../../../service/category.service';
import { MotherBoardService } from '../../../service/motherBoard.service';
import { PanelMotherBoard } from '../../../model/motherboard';
import { PanelCpu, CreateCpu } from '../../../model/cpu';
import { CpuService } from '../../../service/cpu.service';
import { Category } from 'src/app/material/model/category';

interface City {
    name: string,
    code: string
}
@Component({
    templateUrl: './cpu.component.html',
    providers: [MessageService]
})

export class CpuComponent implements OnInit {
    createCpu: boolean = false;
    cpuDialog: boolean = false;
    itemSelected: any = {}
    categorys: Category[] = []
    category: Category = {};
    deleteCpuDialog: boolean = false;
    deleteCpusDialog: boolean = false;
    panelCpus: PanelCpu[] = [];
    panelCpu: PanelCpu = {};
    cpu: CreateCpu = {};
    motherbaord: any;
    selectedMotherBoard: PanelMotherBoard[] = []
    file: any[] = []
    selectedPanelCpu: PanelCpu[] = [];
    submitted: boolean = false;
    uploadedFiles: any[] = [];
    motherBoardList: PanelMotherBoard[] = [];
    rowsPerPageOptions = [5, 10, 20];

    constructor(private motherboard_service: MotherBoardService
        , private cpu_service: CpuService, private category_service: CategoryService, private messageService: MessageService) {

    }

    ngOnInit() {
        this.category_service.getAllCategory().subscribe((data: any) => {
            this.categorys = data.data;
        });
        this.motherboard_service.getAllMotherBoard().subscribe((data: any) => {
            this.motherBoardList = data.data
        }
        )
        this.cpu_service.getAllCpu().subscribe((data: any) => {
            this.panelCpus = data.data
        }
        )

    }
    openNew() {
        this.selectedMotherBoard = []
        this.panelCpu = {};
        this.cpu = {};
        this.itemSelected = {}
        this.submitted = false;
        this.cpuDialog = true;
        this.createCpu = true
    }

    deleteSelectedPanelCpu() {
        this.deleteCpusDialog = true;
    }

    editCpu(panelCpu: PanelCpu) {
        this.panelCpu = { ...panelCpu };
        this.cpu.categoryId = panelCpu.cpu ? panelCpu.cpu[0].categoryId : ""
        this.cpu.id = panelCpu.cpu ? panelCpu.cpu[0].id : ""
        this.cpu.color = panelCpu.cpu ? panelCpu.cpu[0].color?.color : ""
        this.cpu.model = panelCpu.cpu ? panelCpu.cpu[0].model : ""
        this.cpu.spec = panelCpu.cpu ? panelCpu.cpu[0].spec : ""
        this.cpu.price = panelCpu.cpu ? panelCpu.cpu[0].price : 0
        this.itemSelected = this.categorys.filter((item) => item.id == panelCpu.category?.id)[0]
            this.cpu.type = panelCpu.cpu ? panelCpu.cpu[0].type : ""
        this.selectedMotherBoard = this.motherBoardList.filter((item) => {
            const id = item.id
            return panelCpu.panelmotherBoard?.find((i) => {
                return i.id == id
            })
        })

        this.cpuDialog = true;
        this.createCpu = false;
    }

    deleteCpu(panelCpu: PanelCpu) {
        this.deleteCpuDialog = true;
        this.panelCpu = { ...panelCpu };
    }

    async confirmDeleteSelected() {
        this.deleteCpusDialog = false;
        this.panelCpus = this.panelCpus.filter(val => !this.selectedPanelCpu.includes(val));
        for (let i = 0; i < this.selectedPanelCpu.length; i++) {
            await this.cpu_service.deleteCpu(this.selectedPanelCpu[i].id).subscribe((data: any) => {
                this.panelCpus = this.panelCpus.filter(val => val.id !== this.category.id);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'cpu Deleted', life: 3000 });

            });
        }
        this.selectedPanelCpu = [];
    }

    async confirmDelete() {
        this.deleteCpuDialog = false;
        await this.cpu_service.deleteCpu(this.panelCpu.id).subscribe((data: any) => {
            this.panelCpus = this.panelCpus.filter(val => val.id !== this.panelCpu.id);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'cpu Deleted', life: 3000 });
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Delete Fail ', detail: 'cpu Deleted not Successful', life: 3000 });
        });
    }

    hideDialog() {
        this.cpuDialog = false;
        this.submitted = false;
    }

    async saveProduct() {
        this.submitted = true;

        if (this.cpu.model!.trim()) {
            if (this.cpu.id) {
                let formdata = new FormData();
                formdata.set('model', this.cpu.model || "");
                formdata.set('categoryId', this.itemSelected.id);
                formdata.set('itemId', this.cpu.id || "");
                formdata.set('price', this.cpu.price?.toString() || "");
                formdata.set('color', this.cpu.color || "");
                formdata.set('spec', this.cpu.spec || "");
                formdata.set('type', this.cpu.type || "");

                if (this.selectedMotherBoard.length > 0) {
                    var form = ""
                    for (let i = 0; i < this.selectedMotherBoard.length; i++) {
                        if (i == this.selectedMotherBoard.length - 1) {
                            form += `${this.selectedMotherBoard[i].id}`
                        }
                        else {
                            form += `${this.selectedMotherBoard[i].id},`
                        }
                    }
                    formdata.set('listMotherBoardId', form);

                }
                if (this.file != null) {
                    this.uploadedFiles.forEach((file) => { formdata.append('file', file); });
                }
                await this.cpu_service.updateCpu(formdata, this.panelCpu.id).subscribe((data: any) => {
                    this.cpu_service.getAllCpu().subscribe((data: any) => {
                        this.panelCpus = data.data;
                    });
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'cpu Updated', life: 3000 });
                }, error => {
                    this.messageService.add({ severity: 'error', summary: 'Create Fail ', detail: 'cpu update not Successful', life: 3000 });
                })
            } else {
                var form = ""

                for (let i = 0; i < this.selectedMotherBoard.length; i++) {
                    if (i == this.selectedMotherBoard.length - 1) {
                        form += `${this.selectedMotherBoard[i].id}`
                    }
                    else {
                        form += `${this.selectedMotherBoard[i].id},`
                    }
                }
                var formdata = new FormData();
                formdata.set('model', this.cpu.model || "");
                formdata.set('categoryId', this.itemSelected.id);
                this.uploadedFiles.forEach((file) => { formdata.append('file', file); });
                formdata.set('price', this.cpu.price?.toString() || "");
                formdata.set('color', this.cpu.color || "");
                formdata.set('spec', this.cpu.spec || "");
                formdata.set('listMotherBoardId', form || "");
                formdata.set('type', this.cpu.type || "");


                await this.cpu_service.createCpu(formdata).subscribe((data: any) => {
                    this.panelCpus.push(data.data)
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'cpu Created', life: 3000 });
                }, error => {
                    this.messageService.add({ severity: 'error', summary: 'Update Fail ', detail: 'cpu create not Successful', life: 3000 });
                });
            }


            this.panelCpus = [...this.panelCpus];
            this.cpuDialog = false;
            this.panelCpu = {};
            this.uploadedFiles = []
            this.createCpu = false
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
