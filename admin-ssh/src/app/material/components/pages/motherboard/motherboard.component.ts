import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Category } from 'src/app/material/model/category';
import { PanelMotherBoard, CreateMotherBoard } from '../../../model/motherboard';
import { CategoryService } from '../../../service/category.service';
import { MotherBoardService } from '../../../service/motherBoard.service';

@Component({
    templateUrl: './motherboard.component.html',
    providers: [MessageService]
})
export class MotherBoardComponent implements OnInit {
    createMotherBoard: boolean = false;
    motherBoardDialog: boolean = false;
    deleteMotherBoardDialog: boolean = false;
    itemSelected: any = {}
    deleteMotherBoardsDialog: boolean = false;
    categorys: Category[] = []
    category: Category = {};
    panelMotherBoards: PanelMotherBoard[] = [];
    panelMotherBoard: PanelMotherBoard = {};
    motherBoard: CreateMotherBoard = {};
    selectedMotherBoards: PanelMotherBoard[] = [];
    uploadedFiles: any[] = [];
    submitted: boolean = false;
    file: any[] = []


    rowsPerPageOptions = [5, 10, 20];

    constructor(private mother_board_service: MotherBoardService, private category_service: CategoryService, private messageService: MessageService) { }

    ngOnInit() {
        this.category_service.getAllCategory().subscribe((data: any) => {
            this.categorys = data.data
        })
        this.mother_board_service.getAllMotherBoard().subscribe((data: any) => {
            this.panelMotherBoards = data.data
        })
    }

    openNew() {
        this.panelMotherBoard = {};
        this.itemSelected = {}
        this.submitted = false;
        this.motherBoardDialog = true;
        this.createMotherBoard= true
    }

    deleteSelectedMotherBoards() {
        this.deleteMotherBoardsDialog = true;
    }

    editProduct(panelMotherBoard: PanelMotherBoard) {
        this.createMotherBoard= false
        this.panelMotherBoard = { ...panelMotherBoard };
        this.motherBoard.categoryId = panelMotherBoard.motherBoard ? panelMotherBoard.motherBoard[0].categoryId : ""
        this.motherBoard.id= panelMotherBoard.motherBoard ? panelMotherBoard.motherBoard[0].id : ""
        this.motherBoard.color = panelMotherBoard.motherBoard ? panelMotherBoard.motherBoard[0].color?.color : ""
        this.motherBoard.model = panelMotherBoard.motherBoard ? panelMotherBoard.motherBoard[0].model : ""
        this.motherBoard.price = panelMotherBoard.motherBoard ? panelMotherBoard.motherBoard[0].price : 0
        this.itemSelected = this.categorys.filter((item) => item.id == panelMotherBoard.category?.id)[0]
        this.motherBoardDialog = true;
    }

    deleteProduct(panelMotherBoard: PanelMotherBoard) {
        this.deleteMotherBoardDialog = true;
        this.panelMotherBoard = { ...panelMotherBoard };
    }

    async confirmDeleteSelected() {
        this.deleteMotherBoardsDialog = false;
        this.panelMotherBoards = this.panelMotherBoards.filter(val => !this.selectedMotherBoards.includes(val));
        for (let i = 0; i < this.selectedMotherBoards.length; i++) {
            await this.mother_board_service.deleteMotherBoard(this.selectedMotherBoards[i].id).subscribe((data: any) => {
                this.panelMotherBoards = this.panelMotherBoards.filter(val => val.id !== this.category.id);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'MotherBoard Deleted', life: 3000 });
            });
        }
        this.selectedMotherBoards = [];
    }

    async confirmDelete() {
        this.deleteMotherBoardDialog = false;
        await this.mother_board_service.deleteMotherBoard(this.panelMotherBoard.id).subscribe((data: any) => {
            this.panelMotherBoards = this.panelMotherBoards.filter(val => val.id !== this.panelMotherBoard.id);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'MotherBoard Deleted', life: 3000 });
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Delete Fail ', detail: 'MotherBoard Deleted not Successful', life: 3000 });
        });
    }

    hideDialog() {
        this.motherBoardDialog = false;
        this.submitted = false;
    }

    async saveProduct() {
        this.submitted = true;

        if (this.motherBoard.model?.trim()) {
            if (this.panelMotherBoard.id) {
                let formdata = new FormData();
                formdata.set('model', this.motherBoard.model || "");
                formdata.set('categoryId', this.itemSelected.id);
                formdata.set('itemId', this.motherBoard.id || "");
                formdata.set('price', this.motherBoard.price?.toString() || "");
                formdata.set('color', this.motherBoard.color || "");
                if (this.file != null) {
                    this.uploadedFiles.forEach((file) => { formdata.append('file', file); });
                }
                await this.mother_board_service.updateMotherBoard(formdata, this.panelMotherBoard.id).subscribe((data: any) => {
                    this.mother_board_service.getAllMotherBoard().subscribe((data: any) => {
                        this.panelMotherBoards = data.data;
                    });
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'MotherBoard Updated', life: 3000 });
                }, error => {
                    this.messageService.add({ severity: 'error', summary: 'Create Fail ', detail: 'MotherBoard create not Successful', life: 3000 });
                })
            } else {
                var formdata = new FormData();
                formdata.set('model', this.motherBoard.model || "");
                formdata.set('categoryId', this.itemSelected.id);
                this.uploadedFiles.forEach((file) => { formdata.append('file', file); });
                formdata.set('price', this.motherBoard.price?.toString() || "");
                formdata.set('color', this.motherBoard.color || "");

                await this.mother_board_service.createMotherBoard(formdata).subscribe((data: any) => {
                    this.panelMotherBoards.push(data.data)
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'MotherBoard Created', life: 3000 });
                }, error => {
                    this.messageService.add({ severity: 'error', summary: 'Update Fail ', detail: 'MotherBoard Update not Successful', life: 3000 });
                });
            }

            this.panelMotherBoards = [...this.panelMotherBoards];
            this.motherBoardDialog = false;
            this.panelMotherBoard = {};
            this.uploadedFiles = []
            this.motherBoard = {}
            this.createMotherBoard = false
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
