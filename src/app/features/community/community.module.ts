import { CommunityComponent } from './components/community.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'src/app/core/layout/modal/modal.module';

@NgModule({
    declarations: [ CommunityComponent ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule
    ]
})

export class CommunityModule {}