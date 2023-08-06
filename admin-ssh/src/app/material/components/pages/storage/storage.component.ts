import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

import { MotherBoardService } from '../../../service/motherBoard.service';
import { PanelMotherBoard } from '../../../model/motherboard';
import { Table } from 'primeng/table';
import { Category } from 'src/app/material/model/category';
import { PanelStorage, CreateStorage } from 'src/app/material/model/storage';
import { CategoryService } from 'src/app/material/service/category.service';
import { StorageService } from 'src/app/material/service/storage.service';
interface City {
    name: string,
    code: string
}
@Component({
    templateUrl: './storage.component.html',
    providers: [MessageService]
})

export class StorageComponent implements OnInit {
    createStorage: boolean = false;
    storageDialog: boolean = false;
    itemSelected: any = {}
    categorys: Category[] = []
    category: Category = {};
    deleteStorageDialog: boolean = false;
    deleteStoragesDialog: boolean = false;
    panelStorages: PanelStorage[] = [];
    panelStorage: PanelStorage = {};
    storage: CreateStorage = {};
    motherbaord: any;
    selectedMotherBoard: PanelMotherBoard[] = []
    file: any[] = []
    selectedPanelStorage: PanelStorage[] = [];

    submitted: boolean = false;
    uploadedFiles: any[] = [];
    motherBoardList: PanelMotherBoard[] = [];




    rowsPerPageOptions = [5, 10, 20];

    constructor(private motherboard_service: MotherBoardService
        , private storage_service: StorageService, private category_service: CategoryService, private messageService: MessageService) {

    }

    ngOnInit() {
        this.category_service.getAllCategory().subscribe((data: any) => {
            this.categorys = data.data;
        });
        this.motherboard_service.getAllMotherBoard().subscribe((data: any) => {
            this.motherBoardList = data.data
        }
        )
        this.storage_service.getAllStorage().subscribe((data: any) => {
            this.panelStorages = data.data;
        })
    }
    openNew() {
        this.selectedMotherBoard = []
        this.panelStorage = {};
        this.storage = {};
        this.itemSelected = {}
        this.submitted = false;
        this.storageDialog = true;
        this.createStorage = true
    }

    deleteSelectedPanelStorage() {
        this.deleteStoragesDialog = true;
    }

    editStorage(panelStorage: PanelStorage) {
        this.panelStorage = { ...panelStorage };
        this.storage.categoryId = panelStorage.storage ? panelStorage.storage[0].categoryId : ""
        this.storage.id = panelStorage.storage ? panelStorage.storage[0].id : ""
        this.storage.color = panelStorage.storage ? panelStorage.storage[0].color?.color : ""
        this.storage.model = panelStorage.storage ? panelStorage.storage[0].model : ""
        this.storage.spec = panelStorage.storage ? panelStorage.storage[0].spec : ""
        this.storage.price = panelStorage.storage ? panelStorage.storage[0].price : 0
        this.itemSelected = this.categorys.filter((item) => item.id == panelStorage.category?.id)[0]
        this.selectedMotherBoard = this.motherBoardList.filter((item) => {
            const id = item.id
            return panelStorage.panelmotherBoard?.find((i) => {
                return i.id == id
            })
        })

        this.storageDialog = true;
        this.createStorage = false;
    }

    deleteStorage(panelStorage: PanelStorage) {
        this.deleteStorageDialog = true;
        this.panelStorage = { ...panelStorage };
    }

    async confirmDeleteSelected() {
        this.deleteStoragesDialog = false;
        this.panelStorages = this.panelStorages.filter(val => !this.selectedPanelStorage.includes(val));
        for (let i = 0; i < this.selectedPanelStorage.length; i++) {
            await this.storage_service.deleteStorage(this.selectedPanelStorage[i].id).subscribe((data: any) => {
                this.panelStorages = this.panelStorages.filter(val => val.id !== this.category.id);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'storage Deleted', life: 3000 });

            });
        }
        this.selectedPanelStorage = [];
    }

    async confirmDelete() {
        this.deleteStorageDialog = false;
        await this.storage_service.deleteStorage(this.panelStorage.id).subscribe((data: any) => {
            this.panelStorages = this.panelStorages.filter(val => val.id !== this.panelStorage.id);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'storage Deleted', life: 3000 });
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Delete Fail ', detail: 'storage Deleted not Successful', life: 3000 });
        });
    }

    hideDialog() {
        this.storageDialog = false;
        this.submitted = false;
    }

    async saveProduct() {
        this.submitted = true;

        if (this.storage.model!.trim()) {
            if (this.storage.id) {
                let formdata = new FormData();
                formdata.set('model', this.storage.model || "");
                formdata.set('categoryId', this.itemSelected.id);
                formdata.set('itemId', this.storage.id || "");
                formdata.set('price', this.storage.price?.toString() || "");
                formdata.set('color', this.storage.color || "");
                formdata.set('spec', this.storage.spec || "");
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
                await this.storage_service.updateStorage(formdata, this.panelStorage.id).subscribe((data: any) => {
                    this.storage_service.getAllStorage().subscribe((data: any) => {
                        this.panelStorages = data.data;
                    });
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'storage Updated', life: 3000 });
                }, error => {
                    this.messageService.add({ severity: 'error', summary: 'Create Fail ', detail: 'storage update not Successful', life: 3000 });
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
                formdata.set('model', this.storage.model || "");
                formdata.set('categoryId', this.itemSelected.id);
                this.uploadedFiles.forEach((file) => { formdata.append('file', file); });
                formdata.set('price', this.storage.price?.toString() || "");
                formdata.set('color', this.storage.color || "");
                formdata.set('spec', this.storage.spec || "");
                formdata.set('listMotherBoardId', form || "");


                await this.storage_service.createStorage(formdata).subscribe((data: any) => {
                    this.panelStorages.push(data.data)
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'storage Created', life: 3000 });
                }, error => {
                    this.messageService.add({ severity: 'error', summary: 'Update Fail ', detail: 'storage create not Successful', life: 3000 });
                });
            }


            this.panelStorages = [...this.panelStorages];
            this.storageDialog = false;
            this.panelStorage = {};
            this.uploadedFiles = []
            this.createStorage = false
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
