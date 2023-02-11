import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Category } from 'src/app/material/model/category';
import { CategoryService } from 'src/app/material/service/category.service';
import { MotherBoardService } from 'src/app/material/service/motherBoard.service';
import { RamService } from 'src/app/material/service/ram.service';

import { CreateRam, PanelMotherBoard, PanelRam } from '../../../model/ram';
interface City {
    name: string,
    code: string
}
@Component({
    templateUrl: './ram.component.html',
    providers: [MessageService]
})

export class RamComponent implements OnInit {
    createRam: boolean = false;
    ramDialog: boolean = false;
    itemSelected: any = {}
    categorys: Category[] = []
    category: Category = {};
    deleteRamDialog: boolean = false;
    deleteRamsDialog: boolean = false;
    panelRams: PanelRam[] = [];
    panelRam: PanelRam = {};
    ram: CreateRam = {};
    motherbaord: any;
    selectedMotherBoard: PanelMotherBoard[] = []
    file: any[] = []
    selectedPanelRam: PanelRam[] = [];
    submitted: boolean = false;
    uploadedFiles: any[] = [];
    motherBoardList: PanelMotherBoard[] = [];




    rowsPerPageOptions = [5, 10, 20];

    constructor(private motherboard_service: MotherBoardService
        , private ram_service: RamService, private category_service: CategoryService, private messageService: MessageService) {

    }

    ngOnInit() {
        this.category_service.getAllCategory().subscribe((data: any) => {
            this.categorys = data.data;
        });
        this.motherboard_service.getAllMotherBoard().subscribe((data: any) => {
            this.motherBoardList = data.data
        }
        )
        this.ram_service.getAllRam().subscribe((data: any) => {
            this.panelRams = data.data;
        })
    }
    openNew() {
        this.selectedMotherBoard = []
        this.panelRam = {};
        this.ram = {};
        this.itemSelected = {}
        this.submitted = false;
        this.ramDialog = true;
        this.createRam = true
    }

    deleteSelectedPanelRam() {
        this.deleteRamsDialog = true;
    }

    editRam(panelRam: PanelRam) {
        this.panelRam = { ...panelRam };
        this.ram.categoryId = panelRam.ram ? panelRam.ram[0].categoryId : ""
        this.ram.id = panelRam.ram ? panelRam.ram[0].id : ""
        this.ram.color = panelRam.ram ? panelRam.ram[0].color?.color : ""
        this.ram.model = panelRam.ram ? panelRam.ram[0].model : ""
        this.ram.spec = panelRam.ram ? panelRam.ram[0].spec : ""
        this.ram.price = panelRam.ram ? panelRam.ram[0].price : 0
        this.itemSelected = this.categorys.filter((item) => item.id == panelRam.category?.id)[0]
        this.selectedMotherBoard = this.motherBoardList.filter((item) => {
            const id = item.id
            return panelRam.panelmotherBoard?.find((i) => {
                return i.id == id
            })
        })

        this.ramDialog = true;
        this.createRam = false;
    }

    deleteRam(panelRam: PanelRam) {
        this.deleteRamDialog = true;
        this.panelRam = { ...panelRam };
    }

    async confirmDeleteSelected() {
        this.deleteRamsDialog = false;
        this.panelRams = this.panelRams.filter(val => !this.selectedPanelRam.includes(val));
        for (let i = 0; i < this.selectedPanelRam.length; i++) {
            await this.ram_service.deleteRam(this.selectedPanelRam[i].id).subscribe((data: any) => {
                this.panelRams = this.panelRams.filter(val => val.id !== this.category.id);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'ram Deleted', life: 3000 });

            });
        }
        this.selectedPanelRam = [];
    }

    async confirmDelete() {
        this.deleteRamDialog = false;
        await this.ram_service.deleteRam(this.panelRam.id).subscribe((data: any) => {
            this.panelRams = this.panelRams.filter(val => val.id !== this.panelRam.id);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'ram Deleted', life: 3000 });
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Delete Fail ', detail: 'ram Deleted not Successful', life: 3000 });
        });
    }

    hideDialog() {
        this.ramDialog = false;
        this.submitted = false;
    }

    async saveProduct() {
        this.submitted = true;

        if (this.ram.model!.trim()) {
            if (this.ram.id) {
                let formdata = new FormData();
                formdata.set('model', this.ram.model || "");
                formdata.set('categoryId', this.itemSelected.id);
                formdata.set('itemId', this.ram.id || "");
                formdata.set('price', this.ram.price?.toString() || "");
                formdata.set('color', this.ram.color || "");
                formdata.set('spec', this.ram.spec || "");

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
                await this.ram_service.updateRam(formdata, this.panelRam.id).subscribe((data: any) => {
                    this.ram_service.getAllRam().subscribe((data: any) => {
                        this.panelRams = data.data;
                    });
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'ram Updated', life: 3000 });
                }, error => {
                    this.messageService.add({ severity: 'error', summary: 'Create Fail ', detail: 'ram update not Successful', life: 3000 });
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
                formdata.set('model', this.ram.model || "");
                formdata.set('categoryId', this.itemSelected.id);
                this.uploadedFiles.forEach((file) => { formdata.append('file', file); });
                formdata.set('price', this.ram.price?.toString() || "");
                formdata.set('color', this.ram.color || "");
                formdata.set('spec', this.ram.spec || "");
                formdata.set('listMotherBoardId', form || "");


                await this.ram_service.createRam(formdata).subscribe((data: any) => {
                    this.panelRams.push(data.data)
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'ram Created', life: 3000 });
                }, error => {
                    this.messageService.add({ severity: 'error', summary: 'Update Fail ', detail: 'ram create not Successful', life: 3000 });
                });
            }


            this.panelRams = [...this.panelRams];
            this.ramDialog = false;
            this.panelRam = {};
            this.uploadedFiles = []
            this.createRam = false
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
