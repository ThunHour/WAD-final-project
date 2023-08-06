import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { PanelCase, CreateCase } from 'src/app/material/model/case';
import { Category } from 'src/app/material/model/category';
import { PanelMotherBoard } from 'src/app/material/model/motherboard';
import { CaseService } from 'src/app/material/service/case.service';
import { CategoryService } from 'src/app/material/service/category.service';
import { MotherBoardService } from 'src/app/material/service/motherBoard.service';


@Component({
    templateUrl: './case.component.html',
    providers: [MessageService]
})
export class CaseComponent implements OnInit {
    createCase: boolean = false;
    caseDialog: boolean = false;
    itemSelected: any = {}
    categorys: Category[] = []
    category: Category = {};
    deleteCaseDialog: boolean = false;
    deleteCasesDialog: boolean = false;
    panelCases: PanelCase[] = [];
    panelCase: PanelCase = {};
    case: CreateCase = {};
    motherbaord: any;
    selectedMotherBoard: PanelMotherBoard[] = []
    file: any[] = []
    selectedPanelCase: PanelCase[] = [];
    submitted: boolean = false;
    uploadedFiles: any[] = [];
    motherBoardList: PanelMotherBoard[] = [];
    rowsPerPageOptions = [5, 10, 20];

    constructor(private motherboard_service: MotherBoardService
        , private case_service: CaseService, private category_service: CategoryService, private messageService: MessageService) { }

    ngOnInit() {
        this.category_service.getAllCategory().subscribe((data: any) => {
            this.categorys = data.data
        })
        this.motherboard_service.getAllMotherBoard().subscribe((data: any) => {
            this.motherBoardList = data.data
        })
        this.case_service.getAllCase().subscribe((data: any) => {
            this.panelCases = data.data
        })
    }

    openNew() {
        this.selectedMotherBoard = []
        this.panelCase = {};
        this.case = {};
        this.itemSelected = {}
        this.submitted = false;
        this.caseDialog = true;
        this.createCase = true
    }

    deleteSelectedPanelCase() {
        this.deleteCasesDialog = true;
    }

    editCase(panelCase: PanelCase) {
        this.panelCase = { ...panelCase };
        this.case.categoryId = panelCase.case ? panelCase.case[0].categoryId : ""
        this.case.id = panelCase.case ? panelCase.case[0].id : ""
        this.case.color = panelCase.case ? panelCase.case[0].color?.color : ""
        this.case.model = panelCase.case ? panelCase.case[0].model : ""

        this.case.price = panelCase.case ? panelCase.case[0].price : 0
        this.itemSelected = this.categorys.filter((item) => item.id == panelCase.category?.id)[0]
        this.selectedMotherBoard = this.motherBoardList.filter((item) => {
            const id = item.id
            return panelCase.panelmotherBoard?.find((i) => {
                return i.id == id
            })
        })

        this.caseDialog = true;
        this.createCase = false;
    }

    deleteCase(panelCase: PanelCase) {
        this.deleteCaseDialog = true;
        this.panelCase = { ...panelCase };
    }

    async confirmDeleteSelected() {
        this.deleteCasesDialog = false;
        this.panelCases = this.panelCases.filter(val => !this.selectedPanelCase.includes(val));
        for (let i = 0; i < this.selectedPanelCase.length; i++) {
            await this.case_service.deleteCase(this.selectedPanelCase[i].id).subscribe((data: any) => {
                this.panelCases = this.panelCases.filter(val => val.id !== this.category.id);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'case Deleted', life: 3000 });

            });
        }
        this.selectedPanelCase = [];
    }

    async confirmDelete() {
        this.deleteCaseDialog = false;
        await this.case_service.deleteCase(this.panelCase.id).subscribe((data: any) => {
            this.panelCases = this.panelCases.filter(val => val.id !== this.panelCase.id);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'case Deleted', life: 3000 });
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Delete Fail ', detail: 'case Deleted not Successful', life: 3000 });
        });
    }

    hideDialog() {
        this.caseDialog = false;
        this.submitted = false;
    }

    async saveProduct() {


        this.submitted = true;

        if (this.case.model!.trim()) {
            if (this.case.id) {
                let formdata = new FormData();
                formdata.set('model', this.case.model || "");
                formdata.set('categoryId', this.itemSelected.id);
                formdata.set('itemId', this.case.id || "");
                formdata.set('price', this.case.price?.toString() || "");
                formdata.set('color', this.case.color || "");
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
                await this.case_service.updateCase(formdata, this.panelCase.id).subscribe((data: any) => {
                    this.case_service.getAllCase().subscribe((data: any) => {
                        this.panelCases = data.data;
                    });
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'case Updated', life: 3000 });
                }, error => {
                    this.messageService.add({ severity: 'error', summary: 'Create Fail ', detail: 'case update not Successful', life: 3000 });
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
                formdata.set('model', this.case.model || "");
                formdata.set('categoryId', this.itemSelected.id);
                this.uploadedFiles.forEach((file) => { formdata.append('file', file); });
                formdata.set('price', this.case.price?.toString() || "");
                formdata.set('color', this.case.color || "");

                formdata.set('listMotherBoardId', form || "");


                await this.case_service.createCase(formdata).subscribe((data: any) => {
                    this.panelCases.push(data.data)
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'case Created', life: 3000 });
                }, error => {
                    this.messageService.add({ severity: 'error', summary: 'Update Fail ', detail: 'case create not Successful', life: 3000 });
                });
            }


            this.panelCases = [...this.panelCases];
            this.caseDialog = false;
            this.panelCase = {};
            this.uploadedFiles = []
            this.createCase = false
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
