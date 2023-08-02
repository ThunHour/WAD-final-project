import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Partner } from 'src/app/material/model/partner';

import { PartnerService } from '../../../service/partner.service';

@Component({
    templateUrl: './partner.component.html',
    providers: [MessageService]
})
export class PartnerComponent implements OnInit {

    partnerDialog: boolean = false;

    deletePartnerDialog: boolean = false;

    deletePartnersDialog: boolean = false;

    partners: Partner[] = [];

    partner: Partner = {};

    selectedPartners: Partner[] = [];

    submitted: boolean = false;
    statuses: any[] = [];

    rowsPerPageOptions = [5, 10, 20];
    file: any = {}
    constructor(private partner_service: PartnerService, private messageService: MessageService) { }

    ngOnInit() {
        this.partner_service.getAllPartner().subscribe((res: any) => {
            this.partners = res.data
        });
    }

    openNew() {
        this.partner = {};
        this.submitted = false;
        this.partnerDialog = true;
    }

    deleteSelectedProducts() {
        this.deletePartnersDialog = true;
    }

    editProduct(partner: Partner) {
        this.partner = { ...partner };
        this.partnerDialog = true;
    }

    deleteProduct(partner: Partner) {
        this.deletePartnerDialog = true;
        this.partner = { ...partner };
    }

    async confirmDeleteSelected() {
        this.deletePartnersDialog = false;
        this.partners = this.partners.filter(val => !this.selectedPartners.includes(val));
        for (let i = 0; i < this.selectedPartners.length; i++) {
            await this.partner_service.deletePartner(this.selectedPartners[i].id).subscribe((data: any) => {
                this.partners = this.partners.filter(val => val.id !== this.partner.id);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Partner Deleted', life: 3000 });
                this.partner = {};
            });
        }
        this.selectedPartners = [];
    }

    async confirmDelete() {
        this.deletePartnerDialog = false;
        await this.partner_service.deletePartner(this.partner.id).subscribe((data: any) => {
            this.partners = this.partners.filter(val => val.id !== this.partner.id);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Partner Deleted', life: 3000 });
            this.partner = {};
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Delete Fail ', detail: 'Partner Deleted not Successful', life: 3000 });
        });
    }

    hideDialog() {
        this.partnerDialog = false;
        this.submitted = false;
    }

    async saveProduct() {
        this.submitted = true;

        if (this.partner.storeName?.trim()) {
            if (this.partner.id) {
                let formddata = new FormData();
                formddata.set('storeName', this.partner.storeName);
                formddata.set('webUrl', this.partner.webUrl||"");
                formddata.set('location', this.partner.location||"");
                if (this.file != null) {
                    formddata.set('logo', this.file);
                }
                await this.partner_service.updatePartner(formddata, this.partner.id).subscribe((data: any) => {
                    this.partner_service.getAllPartner().subscribe((data: any) => {
                        this.partners = data.data;
                    });
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Category Updated', life: 3000 });
                },error=>{
                    this.messageService.add({ severity: 'error', summary: 'Create Fail ', detail: 'Category create not Successful', life: 3000 });
                })
            } else {
                let formdata = new FormData();
                formdata.set('storeName', this.partner.storeName);
                formdata.set('webUrl', this.partner.webUrl||"");
                formdata.set('location', this.partner.location||"");
                formdata.set('logo', this.file);
                await this.partner_service.createPartner(formdata).subscribe((data: any) => {
                    this.partners.push(data.data)
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Category Created', life: 3000 });

                },error=>{
                    this.messageService.add({ severity: 'error', summary: 'Update Fail ', detail: 'Category Update not Successful', life: 3000 });
                });
            }

            this.partners = [...this.partners];
            this.partnerDialog = false;
            this.partner = {};
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
